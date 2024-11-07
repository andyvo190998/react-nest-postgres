import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExperienceModule } from "./experience/experience.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { CitiesModule } from "./cities/cities.module";
import { LocationsModule } from "./locations/locations.module";
import { SlotModule } from "./slot/slot.module";

@Module({
	imports: [
		ExperienceModule,
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: "postgres",
				host: configService.get("DB_HOST"),
				port: +configService.get("DB_PORT"),
				username: configService.get("DB_USERNAME"),
				password: configService.get("DB_PASSWORD"),
				database: configService.get("DB_NAME"),
				entities: [join(process.cwd(), "dist/**/*.entity.js")],
				// do not use synchronize: true in real projects
				synchronize: true,
			}),
		}),
		CitiesModule,
		LocationsModule,
		SlotModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
