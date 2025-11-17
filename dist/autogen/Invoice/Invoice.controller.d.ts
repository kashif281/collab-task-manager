import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Invoice } from './dtos/Invoice.dto';
import { InvoiceService } from './Invoice.service';
export declare class InvoiceController implements CrudController<Invoice> {
    service: InvoiceService;
    constructor(service: InvoiceService);
    get base(): CrudController<Invoice>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Invoice> | Invoice[]>;
    get(req: CrudRequest): Promise<Invoice>;
    create(req: CrudRequest, dto: Invoice): Promise<Invoice>;
    createMany(req: CrudRequest, dto: CreateManyDto<Invoice>): Promise<Invoice[]>;
    update(req: CrudRequest, dto: Invoice): Promise<Invoice>;
    replace(req: CrudRequest, dto: Invoice): Promise<Invoice>;
    delete(req: CrudRequest): Promise<void | Invoice>;
}
