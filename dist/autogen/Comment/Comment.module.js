"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const Comment_entity_1 = require("./Comment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Comment_service_1 = require("./Comment.service");
const Comment_controller_1 = require("./Comment.controller");
let CommentModule = class CommentModule {
};
exports.CommentModule = CommentModule;
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Comment_entity_1.Comment])],
        providers: [Comment_service_1.CommentService],
        exports: [Comment_service_1.CommentService],
        controllers: [Comment_controller_1.CommentController],
    })
], CommentModule);
//# sourceMappingURL=Comment.module.js.map