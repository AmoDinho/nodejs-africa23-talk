import { Bucket } from '@serverless-stack/resources';
import { Construct } from 'constructs';

const InvoiceBucket = (stack: Construct) => {
  return new Bucket(stack, 'invoice-bucket');
};

export default InvoiceBucket;
