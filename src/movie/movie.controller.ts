import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MovieDto } from '@root/movie/dto/movie.dto';
import { CreateMovieDto } from '@root/movie/dto/create-movie.dto';
import { ApiHeader } from '@nestjs/swagger';
import type { Request, Response } from 'express';

@Controller('movie')
export class MovieController {
  @Get()
  findByGenre(@Query() dto: MovieDto) {
    return { ...dto };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return `${dto.title}`;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return JSON.stringify(headers);
  }

  @ApiHeader({
    name: 'user-agent',
    required: false,
  })
  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method.toUpperCase(),
      url: req.url,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
  }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(200).json({
      statusCode: 200,
      message: 'OK',
    });
  }
}
