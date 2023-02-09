import { SSTConfig } from 'sst';
import { API } from './stacks/MyStack';
import { Api } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'lunar-invoice-service',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(API);
  },
};
