import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from '@root/review/dto/review.dto';
import { ReviewEntity } from '@root/review/entities/review.entity';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() dto: ReviewDto): Promise<ReviewEntity> {
    return this.reviewService.create(dto);
  }
}
