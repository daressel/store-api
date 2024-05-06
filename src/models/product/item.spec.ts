import { Test, TestingModule } from '@nestjs/testing';
import { Item } from './item';

describe('Item', () => {
  let provider: Item;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Item],
    }).compile();

    provider = module.get<Item>(Item);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
