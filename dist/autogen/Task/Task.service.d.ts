import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Task } from './Task.entity';
export declare class TaskService extends TypeOrmCrudService<Task> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
