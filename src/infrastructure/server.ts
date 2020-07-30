import express from 'express';

export class Server {
	private server: express.Express;
	private port: number;

	constructor(port: number) {
		this.port = port;

		this.server = express();
	}

	create(): void {
		this.server.use(express.json());
		this.server.use(express.urlencoded({ extended: true }));
	}

	start(): void {
		this.server.listen(this.port, () => {
			console.log(`Listening on http://localhost:${this.port}`);
		});
	}
}
