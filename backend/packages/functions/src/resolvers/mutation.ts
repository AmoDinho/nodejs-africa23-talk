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
    Bucket: `invoice-bucket`,
    Key: `${input.name}-invoice`,
    ACL: `public-read`,
    Body: buf,
  };

  const result = await putS3Object(params);

  return result;
};

export const Mutation = {
  generateInvoice: generateInvoice,
};
