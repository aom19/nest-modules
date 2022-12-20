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
var MyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModule = void 0;
const common_1 = require("@nestjs/common");
const my_module_service_1 = require("./my-module.service");
let MyModule = MyModule_1 = class MyModule {
    constructor(myService) {
        this.myService = myService;
    }
    async onModuleInit() {
        await this.myService.init();
        await this.myService.keyCloackInit();
    }
};
MyModule = MyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [my_module_service_1.MyModuleService],
        exports: [MyModule_1, my_module_service_1.MyModuleService],
    }),
    __metadata("design:paramtypes", [my_module_service_1.MyModuleService])
], MyModule);
exports.MyModule = MyModule;
//# sourceMappingURL=my-module.module.js.map