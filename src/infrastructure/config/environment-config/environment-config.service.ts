import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DB_PORT');
  }

  getDatabaseUsername(): string {
    return this.configService.get<string>('DB_USERNAME');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DB_NAME');
  }
}
