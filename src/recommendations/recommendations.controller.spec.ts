import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationsService } from './recommendations.service';

describe('AppController', () => {
  let appController: RecommendationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationsController],
      providers: [RecommendationsService],
    }).compile();

    appController = app.get<RecommendationsController>(
      RecommendationsController,
    );
  });

  describe('/recommendations', () => {
    it('should return all available recommendations', () => {
      expect(appController.findAll()).toBe('Hello World!');
    });
  });
});
