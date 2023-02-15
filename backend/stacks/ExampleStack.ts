import { GraphQLApi, StackContext } from '@serverless-stack/resources';

export default function ExampleStack({ stack }: StackContext) {
  // Create the GraphQL API
  const api = new GraphQLApi(stack, 'ApolloApi', {
    server: 'packages/functions/src/lambda.handler',
    defaults: {
      function: {
        timeout: 20,
      },
    },
    bundle: {
      externalModules: ['chrome-aws-lambda'],
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
