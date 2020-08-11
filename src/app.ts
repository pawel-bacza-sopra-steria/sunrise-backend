import { Server, ConfigurationData } from './infrastructure';

export class Application {
	private server: Server;

	constructor(config: ConfigurationData) {
		this.server = new Server(config.port);
	}

	async start(): Promise<void> {
		await this.server.start();
	}
}
