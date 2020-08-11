import { Application } from './app';
import { Configuration } from './infrastructure';

const config = new Configuration();
const configData = config.get();

const app = new Application(configData);

app.start();
