import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recommendation> {
    return this.recommendationsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createRecommendationDto: CreateRecommendationDto,
  ): Promise<void> {
    this.recommendationsService.create(createRecommendationDto);
  }
}
