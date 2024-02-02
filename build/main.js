"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidUnknownValues: false,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('venda API')
        .setDescription('Descrição dos endpoints da API')
        .setVersion('1.0')
        .addTag('Venda')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(Number(process.env.BACKEND_PORT), () => {
        console.log(`🚀 Server running on port ${process.env.BACKEND_PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map