import { GraphQLApi, StackContext } from '@serverless-stack/resources';
import { LayerVersion } from '@aws-cdk/aws-lambda';

export default function ExampleStack({ stack }: StackContext) {
  // Create the GraphQL AP
  const layerArn =
    'arn:aws:lambda:us-east-1:298693910236:layer:chrome-aws-lambda:22';
  const api = new GraphQLApi(stack, 'ApolloApi', {
    server: 'packages/functions/src/lambda.handler',
    defaults: {
      function: {
        timeout: 20,
      },
    },
    environment: { AWS_ACCOUNT_NUMBER: process.env.AWS_ACCOUNT_NUMBER },
    bundle: {
      externalModules: ['chrome-aws-lambda'],
    },
    layers: [layer],
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
