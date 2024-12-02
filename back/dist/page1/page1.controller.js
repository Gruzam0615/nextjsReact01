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
exports.Page1Controller = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const axios_2 = require("axios");
let Page1Controller = class Page1Controller {
    constructor(httpService) {
        this.httpService = httpService;
    }
    findAll() {
        return "this is Page1Controller @Get";
    }
    findAll2() {
        return "This is Page1 /find";
    }
    async findAll3(server_name) {
        console.log("Requested /page1/test1\n" + "param: " + server_name);
        const url = "https://open.api.nexon.com/mabinogi/v1/horn-bugle-world/history?server_name=" + server_name;
        const data = await axios_2.default.get(url, {
            headers: {
                "x-nxopen-api-key": String(process.env.TEST1_API_KEY),
            }
        });
        return data.data;
    }
};
exports.Page1Controller = Page1Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Page1Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/find"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Page1Controller.prototype, "findAll2", null);
__decorate([
    (0, common_1.Get)("/test1"),
    __param(0, (0, common_1.Query)("server_name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Page1Controller.prototype, "findAll3", null);
exports.Page1Controller = Page1Controller = __decorate([
    (0, common_1.Controller)("page1"),
    __metadata("design:paramtypes", [axios_1.HttpService])
], Page1Controller);
//# sourceMappingURL=page1.controller.js.map