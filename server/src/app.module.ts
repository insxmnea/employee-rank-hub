import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './typeorm/entities/employee.entity';
import { SubdivisionModule } from './subdivision/subdivision.module';
import { Subdivision } from './typeorm/entities/subdivision.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Assessment } from './typeorm/entities/assessment.entity';
import { AssessmentModule } from './assessment/assessment.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    EmployeeModule,
    SubdivisionModule,
    AuthModule,
    UsersModule,
    AssessmentModule,
    ImageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'erh_database',
      entities: [Employee, Subdivision, Assessment],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
