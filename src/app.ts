import { Server, ConfigurationData } from './infrastructure';

export class Application {
	private server: Server;

	constructor(config: ConfigurationData) {
		this.server = new Server(config.port);
	}

	create(): void {
		this.server.create();
	}

	start(): void {
		this.server.start();
	}
}
