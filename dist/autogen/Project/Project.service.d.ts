import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Project } from './Project.entity';
export declare class ProjectService extends TypeOrmCrudService<Project> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
