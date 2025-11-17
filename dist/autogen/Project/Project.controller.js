"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const swagger_1 = require("@nestjs/swagger");
const Project_dto_1 = require("./dtos/Project.dto");
const Project_service_1 = require("./Project.service");
let ProjectController = class ProjectController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getMany(req) {
        return this.base.getManyBase(req);
    }
    get(req) {
        return this.base.getOneBase(req);
    }
    create(req, dto) {
        return this.base.createOneBase(req, dto);
    }
    createMany(req, dto) {
        return this.base.createManyBase(req, dto);
    }
    update(req, dto) {
        return this.base.updateOneBase(req, dto);
    }
    replace(req, dto) {
        return this.base.replaceOneBase(req, dto);
    }
    delete(req) {
        return this.base.deleteOneBase(req);
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, crud_1.Override)('getManyBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve multiple Projects' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getMany", null);
__decorate([
    (0, crud_1.Override)('getOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single Project' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "get", null);
__decorate([
    (0, crud_1.Override)('createOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a single Project' }),
    (0, swagger_1.ApiBody)({
        type: Project_dto_1.ProjectCreate,
        description: 'The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Project_dto_1.Project]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "create", null);
__decorate([
    (0, crud_1.Override)('createManyBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Create multipleProjects' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "createMany", null);
__decorate([
    (0, crud_1.Override)('updateOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a single Project' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Project_dto_1.Project]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "update", null);
__decorate([
    (0, crud_1.Override)('replaceOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Replace a single Project' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Project_dto_1.Project]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "replace", null);
__decorate([
    (0, crud_1.Override)('deleteOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a single Project' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "delete", null);
exports.ProjectController = ProjectController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: Project_dto_1.Project,
        },
        dto: {
            create: Project_dto_1.ProjectCreate,
            update: Project_dto_1.Project,
            replace: Project_dto_1.Project,
        },
        query: {
            limit: 5,
            alwaysPaginate: true,
        },
    }),
    (0, common_1.Controller)('Projects'),
    (0, swagger_1.ApiTags)('Projects'),
    __metadata("design:paramtypes", [Project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=Project.controller.js.map