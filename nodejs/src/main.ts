import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.setGlobalPrefix("api");
app.useGlobalPipes(
new ValidationPipe({
whitelist: true,
forbidNonWhitelisted: true,//ensures that any properties not defined in the DTO classes are rejected.
transform: true,
})
);

    app.use(cookieParser());
    // app.use(csurf({ cookie: true }));
    await app.listen(3000);
  }
  bootstrap();
