import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UserService } from 'src/modules/core_modules/user/services/user.service';

describe('AppController', () => {
  let controller: AppController;

  const mockUserService = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [UserService]
    }).overrideProvider(UserService).useValue(mockUserService).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
