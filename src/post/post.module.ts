import { Module } from '@nestjs/common';
import { PostsService } from './post.service';
import { PostsController } from './post.controller';
import { postsProviders } from './post.provider';
@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController]
})
export class PostModule {}
