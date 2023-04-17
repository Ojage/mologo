import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mologo-client.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  await app.listen(3000);
}
bootstrap();
