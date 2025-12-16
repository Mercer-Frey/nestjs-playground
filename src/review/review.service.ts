import { Injectable } from '@nestjs/common';
import { PrismaService } from '@root/prisma/prisma.service';
import { Review } from '@root/generated/prisma/client';
import { ReviewDto } from '@root/review/dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: ReviewDto): Promise<Review> {
    const { text, rating, movieId } = dto;
    const review = this.prismaService.review.create({
      data: {
        text,
        rating,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });

    return review;
  }
}
