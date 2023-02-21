import { Bucket } from '@serverless-stack/resources';
import { Construct } from 'constructs';

const InvoiceBucketStack = (stack: Construct) => {
  return new Bucket(stack, 'invoice-bucket');
};

export default InvoiceBucketStack;
