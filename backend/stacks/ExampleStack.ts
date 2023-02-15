import { Api, StackContext } from '@serverless-stack/resources';

export default function ExampleStack({ stack }: StackContext) {
  // Create the GraphQL API
  const api = new Api(stack, 'ApolloApi', {
    routes: {
      'POST /': {
        type: 'graphql',
        function: 'packages/functions/src/lambda.handler',
      },
    },
    defaults: {
      function: {
        bundle: {
          format: 'esm',
        },
        timeout: 20,
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
