import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '@root/app.module';
import { PrismaService } from '@root/prisma/prisma.service';
import { ArtistDto } from '@root/artist/dto/create-artist.dto';
import { ArtistGenre } from '@root/generated/prisma/enums';
import { Artist } from '@root/generated/prisma';

const dto: ArtistDto = {
  name: 'Metallica',
  genre: ArtistGenre.ROCK,
};

const artistsSeed: Pick<Artist, 'name' | 'genre'>[] = [
  { name: 'Queen', genre: ArtistGenre.ROCK },
  { name: 'Metallica', genre: ArtistGenre.ROCK },
  { name: 'Michael Jackson', genre: ArtistGenre.POP },
  { name: 'Madonna', genre: ArtistGenre.POP },
];

describe('ArtistController (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();

    prisma = app.get(PrismaService);
  });

  afterAll(async () => {
    await prisma.artist.deleteMany();
    await app.close();
  });

  it('/artists (POST) - should create artist', async () => {
    const response = await request(app.getHttpServer())
      .post('/artists')
      .send(dto)
      .expect(201);

    expect(response.body).toMatchObject(dto);
    expect(response.body).toHaveProperty('id');
  });

  it('/artists/:id (GET) - should return 404 if artist was not found', async () => {
    await request(app.getHttpServer())
      .get('/artists/is-not-existed-id')
      .expect(404);
  });

  it('/artists/:id (GET) - should return an artist by id', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/artists')
      .send(dto)
      .expect(201);

    const createdArtist: Artist = createResponse.body as unknown as Artist;

    expect(createdArtist).toMatchObject({
      name: dto.name,
      genre: dto.genre,
    });
    expect(createdArtist).toHaveProperty('id');

    const getResponse = await request(app.getHttpServer())
      .get(`/artists/${createdArtist.id}`)
      .expect(200);

    const fetchedArtist: Artist = getResponse.body as unknown as Artist;

    expect(fetchedArtist).toEqual(createdArtist);
  });

  describe('GET /artists', () => {
    beforeEach(async () => {
      await prisma.artist.deleteMany();
      await prisma.artist.createMany({
        data: artistsSeed.map(({ name, genre }) => ({
          name,
          genre,
        })),
      });
    });

    it('/artists (GET) - should return all artists', async () => {
      const response = await request(app.getHttpServer())
        .get('/artists/all')
        .expect(200);

      const result: Artist[] = response.body as unknown as Artist[];

      expect(result).toHaveLength(artistsSeed.length);

      const names = result.map((a) => a.name);
      expect(names).toEqual(
        expect.arrayContaining([
          'Queen',
          'Metallica',
          'Michael Jackson',
          'Madonna',
        ]),
      );
    });
  });
});
