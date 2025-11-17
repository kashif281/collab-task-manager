import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Task } from './dtos/Task.dto';
import { TaskService } from './Task.service';
export declare class TaskController implements CrudController<Task> {
    service: TaskService;
    constructor(service: TaskService);
    get base(): CrudController<Task>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Task> | Task[]>;
    get(req: CrudRequest): Promise<Task>;
    create(req: CrudRequest, dto: Task): Promise<Task>;
    createMany(req: CrudRequest, dto: CreateManyDto<Task>): Promise<Task[]>;
    update(req: CrudRequest, dto: Task): Promise<Task>;
    replace(req: CrudRequest, dto: Task): Promise<Task>;
    delete(req: CrudRequest): Promise<void | Task>;
}
