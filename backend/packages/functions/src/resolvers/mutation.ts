import { GenerateBuffer, putS3Object } from '../libs';
import { InvoiceDataTemplate } from '../templates';
import { ICustomer } from '../types';

const generateInvoice = async (
  parent: undefined,
  { input }: { input: ICustomer }
): Promise<String | null> => {
  const buffer = await GenerateBuffer(InvoiceDataTemplate(input));
  const buf = Buffer.from(buffer, 'base64');
  const params = {
    Bucket: process.env.InvoiceBucketResource,
    Key: `${input.name}-invoice`,
    ACL: `public-read`,
    Body: buf,
    ContentType: 'png',
  };

  console.log('hi', params);
  const result = await putS3Object(params);

  if (result === 'Successfull uploaded') {
    return `https://${process.env.InvoiceBucketResource}.s3.${process.env.AWS_REGION}.amazonaws.com/${args.Key}`;
  }
};

export const Mutation = {
  generateInvoice: generateInvoice,
};
