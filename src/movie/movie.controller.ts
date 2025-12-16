import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from '@root/generated/prisma/client';
import { MovieService } from '@root/movie/movie.service';
import { MovieDto } from '@root/movie/dto/movie.dto';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all')
  findAll(): Promise<Partial<Movie>[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() dto: MovieDto): Promise<Movie> {
    return this.movieService.create(dto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() dto: MovieDto): Promise<Movie> {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({
    description: 'Deleted movie id',
    schema: { example: '17554dd8-96e6-4846-a715-c7f055ec32fe' },
  })
  deleteMovie(@Param('id') id: string): Promise<string> {
    return this.movieService.delete(id);
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
