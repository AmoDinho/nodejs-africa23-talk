import { GraphQLApi, StackContext, use } from '@serverless-stack/resources';
import { AddLayerVersionPermissionCommand } from '@aws-sdk/client-lambda';
import { AddLayerVersionPermissionCommandInput } from '@types/aws-lambda';
import ExampleStackResources from './S3Stack';
export default function ExampleStack({ stack }: StackContext) {
  // Create the GraphQL AP
  const layerArn: string = `arn:aws:lambda:us-east-1:764866452798:layer:chrome-aws-lambda:31`;

  const layerConfig: AddLayerVersionPermissionCommandInput = {
    Action: 'lambda:AddLayerVersion',
    LayerName: layerArn,
  };
  const { BackendStack } = use(ExampleStackResources);

  const layer = new AddLayerVersionPermissionCommand(layerConfig);
  const api = new GraphQLApi(stack, 'ApolloApi', {
    server: 'packages/functions/src/lambda.handler',
    defaults: {
      function: {
        timeout: 20,
        environment: {
          AWS_ACCOUNT_NUMBER: process.env.AWS_ACCOUNT_NUMBER,
          InvoiceBucketResource: BackendStack.S3Resources.bucketName,
        },
        permissions: [BackendStack.S3Resources.bucketName],
        bundle: {
          // format: 'esm',
          externalModules: ['@sparticuz/chrome-aws-lambda', 'mitt'],
        },
        layers: [layer],
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
