"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Project_dto_1 = require("./dtos/Project.dto");
const Project_controller_1 = require("./Project.controller");
const Project_service_1 = require("./Project.service");
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
describe('ProjectController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Project_service_1.ProjectService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Project_controller_1.ProjectController],
            providers: [Project_service_1.ProjectService, ApiServiceProvider],
        }).compile();
        controller = module.get(Project_controller_1.ProjectController);
        spyService = module.get(Project_service_1.ProjectService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call ProjectController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call ProjectController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Project_dto_1.Project();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Project.controller.spec.js.map