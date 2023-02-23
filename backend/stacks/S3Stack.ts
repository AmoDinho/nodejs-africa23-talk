import { Bucket, StackContext } from '@serverless-stack/resources';
import { Construct } from 'constructs';

const InvoiceBucketResource = (stack: Construct) => {
  return new Bucket(stack, 'invoice-bucket');
};

const BackendStack = (stack: Construct) => {
  return {
    S3Resources: InvoiceBucketResource(stack),
  };
};

const ExampleStackResources = ({ stack }: StackContext) => {
  return {
    BackendStack: BackendStack(stack),
  };
};
export default ExampleStackResources;
