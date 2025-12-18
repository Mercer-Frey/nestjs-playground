import { ArtistService } from './artist.service';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuidv4 } from 'uuid';
import { ArtistGenre } from '@root/generated/prisma/enums';
import { ArtistDto } from '@root/artist/dto/create-artist.dto';
import { Artist } from '@root/generated/prisma/client';
import { PrismaService } from '@root/prisma/prisma.service';

const MOCK_ID = uuidv4();
const artists: Artist[] = [
  {
    id: MOCK_ID,
    name: 'Queen',
    genre: ArtistGenre.ROCK,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Metallica',
    genre: ArtistGenre.ROCK,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Michael Jackson',
    genre: ArtistGenre.POP,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Madonna',
    genre: ArtistGenre.POP,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const artist: Artist = artists[0];
const dto: ArtistDto = {
  name: artist.name,
  genre: artist.genre,
};
const db = {
  artist: {
    findMany: jest.fn().mockResolvedValue(artists),
    findUnique: jest.fn().mockResolvedValue(artist),
    create: jest.fn().mockResolvedValue(artist),
  },
};

describe('ArtistService', () => {
  let service: ArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArtistService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    service = module.get<ArtistService>(ArtistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of artists', async () => {
    const result = await service.findAll();

    expect(result).toEqual(artists);
    expect(db.artist.findMany).toHaveBeenCalled();
  });

  it('should return a single artist by id', async () => {
    const result = await service.findOne(MOCK_ID);

    expect(result).toEqual(artist);
    expect(db.artist.findUnique).toHaveBeenCalledWith({
      where: { id: MOCK_ID },
    });
  });

  it('should create a single artist', async () => {
    const result = await service.create(dto);

    expect(result).toEqual(artist);
    expect(db.artist.create).toHaveBeenCalledWith({
      data: dto,
    });
  });
});
