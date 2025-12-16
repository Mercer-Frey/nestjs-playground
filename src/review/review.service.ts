import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewEntity } from '@root/review/entities/review.entity';
import { ReviewDto } from '@root/review/dto/review.dto';
import { MovieService } from '@root/movie/movie.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
    private readonly movieService: MovieService,
  ) {}

  async create(dto: ReviewDto): Promise<ReviewEntity> {
    const { text, rating, movieId } = dto;
    const movie = await this.movieService.findOne(movieId);
    const review = this.reviewRepository.create({
      text,
      rating,
      movie,
    });

    return await this.reviewRepository.save(review);
  }
}
