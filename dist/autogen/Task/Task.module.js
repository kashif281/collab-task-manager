"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const Task_entity_1 = require("./Task.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Task_service_1 = require("./Task.service");
const Task_controller_1 = require("./Task.controller");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Task_entity_1.Task])],
        providers: [Task_service_1.TaskService],
        exports: [Task_service_1.TaskService],
        controllers: [Task_controller_1.TaskController],
    })
], TaskModule);
//# sourceMappingURL=Task.module.js.map