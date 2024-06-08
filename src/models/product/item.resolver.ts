import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ItemResolver {
  @Query(() => [String], { name: 'some' })
  some() {
    return '';
  }
}
