import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Project } from './dtos/Project.dto';
import { ProjectService } from './Project.service';
export declare class ProjectController implements CrudController<Project> {
    service: ProjectService;
    constructor(service: ProjectService);
    get base(): CrudController<Project>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Project> | Project[]>;
    get(req: CrudRequest): Promise<Project>;
    create(req: CrudRequest, dto: Project): Promise<Project>;
    createMany(req: CrudRequest, dto: CreateManyDto<Project>): Promise<Project[]>;
    update(req: CrudRequest, dto: Project): Promise<Project>;
    replace(req: CrudRequest, dto: Project): Promise<Project>;
    delete(req: CrudRequest): Promise<void | Project>;
}
