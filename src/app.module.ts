import { Module } from '@nestjs/common';
// import { UsersController } from './users/users.controller';
// import { SolicitacoesExamesController } from './solicitacoes-exames/solicitacoes-exames.controller';
// import { SolicitacoesExamesService } from './solicitacoes-exames/solicitacoes-exames.service';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { SolicitacoesExamesModule } from './solicitacoes-exames/solicitacoes-exames.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

@Module({
  imports: [
    UsersModule,
    SolicitacoesExamesModule,
    MongooseModule.forRoot(config.database.mongoURI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
