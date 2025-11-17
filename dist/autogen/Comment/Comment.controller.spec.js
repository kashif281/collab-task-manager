"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Comment_dto_1 = require("./dtos/Comment.dto");
const Comment_controller_1 = require("./Comment.controller");
const Comment_service_1 = require("./Comment.service");
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
describe('CommentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Comment_service_1.CommentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Comment_controller_1.CommentController],
            providers: [Comment_service_1.CommentService, ApiServiceProvider],
        }).compile();
        controller = module.get(Comment_controller_1.CommentController);
        spyService = module.get(Comment_service_1.CommentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call CommentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call CommentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Comment_dto_1.Comment();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Comment.controller.spec.js.map