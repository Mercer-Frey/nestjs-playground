import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuidv4 } from 'uuid';
import { ArtistGenre } from '@root/generated/prisma/enums';
import { NotFoundException } from '@nestjs/common';
import { ArtistDto } from '@root/artist/dto/create-artist.dto';
import { Artist } from '@root/generated/prisma/client';

const MOCK_ID = uuidv4();
const MOCK_BAD_ID = '11111111111111111111';
const MOCK_EXCEPTION_TEXT = 'Artist not found';
const artist: Artist = {
  id: MOCK_ID,
  name: 'Test Artist',
  genre: ArtistGenre.ROCK,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const dto: ArtistDto = {
  name: 'New Artist',
  genre: ArtistGenre.ROCK,
};

describe('ArtistController', () => {
  let controller: ArtistController;
  let service: ArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistController],
      providers: [
        {
          provide: ArtistService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(ArtistController);
    service = module.get(ArtistService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of artists', async () => {
    const findAllSpy = jest
      .spyOn(service, 'findAll')
      .mockResolvedValue([artist]);

    const result = await controller.findAll();

    expect(result).toEqual([artist]);
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('should return a single artist by id', async () => {
    const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(artist);

    const result = await controller.findOne(MOCK_ID);

    expect(result).toEqual(artist);
    expect(findOneSpy).toHaveBeenCalledWith(MOCK_ID);
  });

  it("should throw NotFoundException if artist doesn't exist", async () => {
    jest
      .spyOn(service, 'findOne')
      .mockRejectedValue(new NotFoundException(MOCK_EXCEPTION_TEXT));

    await expect(controller.findOne(MOCK_BAD_ID)).rejects.toBeInstanceOf(
      NotFoundException,
    );

    await expect(controller.findOne(MOCK_BAD_ID)).rejects.toThrow(
      MOCK_EXCEPTION_TEXT,
    );
  });

  it('should create a single artist', async () => {
    const createSpy = jest.spyOn(service, 'create').mockResolvedValue(artist);

    await controller.create(dto);

    expect(createSpy).toHaveBeenCalledWith(dto);
  });
});
