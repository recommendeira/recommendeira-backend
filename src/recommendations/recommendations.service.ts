import { Injectable } from '@nestjs/common';
import { Recommendation } from './interfaces/recommendation.interface';

@Injectable()
export class RecommendationsService {
  private readonly recommendations: Recommendation[] = [
    {
      id: '0',
      name: 'hi i bims 1 recommendation',
    } as Recommendation,
  ];

  create(recommendation: Recommendation) {
    this.recommendations.push(recommendation);
  }

  findAll(): Recommendation[] {
    return this.recommendations;
  }

  findOne(id: string): Recommendation {
    return this.recommendations.filter((r) => r.id === id).shift();
  }
}
