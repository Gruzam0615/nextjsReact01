"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page1Module = void 0;
const common_1 = require("@nestjs/common");
const page1_controller_1 = require("./page1.controller");
const axios_1 = require("@nestjs/axios");
let Page1Module = class Page1Module {
};
exports.Page1Module = Page1Module;
exports.Page1Module = Page1Module = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [page1_controller_1.Page1Controller],
        providers: [],
    })
], Page1Module);
//# sourceMappingURL=page1.module.js.map