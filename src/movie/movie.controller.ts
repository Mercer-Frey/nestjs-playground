import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from '@root/movie/movie.service';
import { MovieEntity } from '@root/movie/entities/movie.entity';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { MovieDto } from '@root/movie/dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all')
  findAll(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string): Promise<MovieEntity> {
    return this.movieService.findOne(id);
  }

  @Post()
  createMovie(@Body() dto: MovieDto): Promise<MovieEntity> {
    return this.movieService.createMovie(dto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  updateMovie(
    @Param('id') id: string,
    @Body() dto: MovieDto,
  ): Promise<MovieEntity> {
    return this.movieService.updateMovie(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({
    description: 'Deleted movie id',
    schema: { example: 3 },
  })
  deleteMovie(@Param('id') id: string): Promise<string> {
    return this.movieService.deleteMovie(id);
  }
  // @Get('genre')
  // findByGenre(@Query() dto: MovieDto) {
  //   return { ...dto };
  // }
  //
  // @Get(':id')
  // findById(@Param('id') id: string) {
  //   return { id };
  // }
  //
  // @Post()
  // create(@Body() dto: CreateMovieDto) {
  //   return `${dto.title}`;
  // }
  //
  // @Get('headers')
  // getHeaders(@Headers() headers: any) {
  //   return JSON.stringify(headers);
  // }
  //
  // @ApiHeader({
  //   name: 'user-agent',
  //   required: false,
  // })
  // @Get('user-agent')
  // getUserAgent(@Headers('user-agent') userAgent: string) {
  //   return { userAgent };
  // }
  //
  // @Get('request')
  // getRequestDetails(@Req() req: Request) {
  //   return {
  //     method: req.method.toUpperCase(),
  //     url: req.url,
  //     params: req.params,
  //     query: req.query,
  //     headers: req.headers,
  //   };
  // }
  //
  // @Get('response')
  // getResponseDetails(@Res() res: Response) {
  //   res.status(200).json({
  //     statusCode: 200,
  //     message: 'OK',
  //   });
  // }
}
