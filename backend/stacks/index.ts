import { App } from '@serverless-stack/resources';

import ExampleStack from './ExampleStack';

const main = (app: App) => {
  app.stack(ExampleStack, { id: 'exampleStack' });
};

export default main;
