import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Comment } from './Comment.entity';
export declare class CommentService extends TypeOrmCrudService<Comment> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
