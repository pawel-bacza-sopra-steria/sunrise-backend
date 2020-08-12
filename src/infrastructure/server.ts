import { ApolloServer } from 'apollo-server';
import { typeDefsMocked } from '../graphql';

export class Server {
	private server: ApolloServer;
	private port: number;

	constructor(port: number) {
		this.port = port;

		this.server = new ApolloServer({ schema: typeDefsMocked });
	}

	async start(): Promise<void> {
		const serverInfo = await this.server.listen({ port: this.port });

		console.log(`Listening on ${serverInfo.url}`);
	}
}
