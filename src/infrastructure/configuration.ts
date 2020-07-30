import { config } from 'dotenv';

export interface ConfigurationData {
	port: number;
}

export class Configuration {
	constructor() {
		config();
	}

	get(): ConfigurationData {
		const { APP_PORT = 3000 } = process.env;

		return {
			port: Number(APP_PORT),
		};
	}
}
