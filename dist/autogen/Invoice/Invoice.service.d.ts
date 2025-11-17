import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Invoice } from './Invoice.entity';
export declare class InvoiceService extends TypeOrmCrudService<Invoice> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
