import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Comment } from './dtos/Comment.dto';
import { CommentService } from './Comment.service';
export declare class CommentController implements CrudController<Comment> {
    service: CommentService;
    constructor(service: CommentService);
    get base(): CrudController<Comment>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Comment> | Comment[]>;
    get(req: CrudRequest): Promise<Comment>;
    create(req: CrudRequest, dto: Comment): Promise<Comment>;
    createMany(req: CrudRequest, dto: CreateManyDto<Comment>): Promise<Comment[]>;
    update(req: CrudRequest, dto: Comment): Promise<Comment>;
    replace(req: CrudRequest, dto: Comment): Promise<Comment>;
    delete(req: CrudRequest): Promise<void | Comment>;
}
