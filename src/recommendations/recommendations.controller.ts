import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { Recommendation } from './interfaces/recommendation.interface';
import { RecommendationsService } from './recommendations.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private recommendationsService: RecommendationsService) {}

  @Get()
  async findAll(): Promise<Recommendation[]> {
    return this.recommendationsService.findAll();
  }

  @Post()
  async create(
    @Body() createRecommendationDto: CreateRecommendationDto,
  ): Promise<void> {
    this.recommendationsService.create(createRecommendationDto);
  }
}
