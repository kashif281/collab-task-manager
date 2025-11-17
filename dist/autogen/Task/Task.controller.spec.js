"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Task_dto_1 = require("./dtos/Task.dto");
const Task_controller_1 = require("./Task.controller");
const Task_service_1 = require("./Task.service");
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
describe('TaskController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Task_service_1.TaskService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Task_controller_1.TaskController],
            providers: [Task_service_1.TaskService, ApiServiceProvider],
        }).compile();
        controller = module.get(Task_controller_1.TaskController);
        spyService = module.get(Task_service_1.TaskService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call TaskController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call TaskController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Task_dto_1.Task();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Task.controller.spec.js.map