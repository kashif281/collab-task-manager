"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Invoice_dto_1 = require("./dtos/Invoice.dto");
const Invoice_controller_1 = require("./Invoice.controller");
const Invoice_service_1 = require("./Invoice.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('InvoiceController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Invoice_service_1.InvoiceService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Invoice_controller_1.InvoiceController],
            providers: [Invoice_service_1.InvoiceService, ApiServiceProvider],
        }).compile();
        controller = module.get(Invoice_controller_1.InvoiceController);
        spyService = module.get(Invoice_service_1.InvoiceService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call InvoiceController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call InvoiceController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Invoice_dto_1.Invoice();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Invoice.controller.spec.js.map