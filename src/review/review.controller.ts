import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from '@root/review/review.service';
import { ReviewDto } from '@root/review/dto/review.dto';
import { Review } from '@root/generated/prisma/client';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() dto: ReviewDto): Promise<Review> {
    return this.reviewService.create(dto);
  }
}
