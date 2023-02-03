import { Injectable } from '@nestjs/common';
import { Recommendation } from './interfaces/recommendation.interface';

@Injectable()
export class RecommendationsService {
  private readonly recommendations: Recommendation[] = [
    {
      name: 'hi i bims 1 recommendation',
    } as Recommendation,
  ];

  create(recommendation: Recommendation) {
    this.recommendations.push(recommendation);
  }

  findAll(): Recommendation[] {
    return this.recommendations;
  }
}
