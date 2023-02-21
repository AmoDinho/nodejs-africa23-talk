import { GenerateBuffer } from '../libs';
import { InvoiceDataTemplate } from '../templates';
const generateInvoice = async (
  parent: undefined,
  { name }: { name: string }
): Promise<String | null> => {
  const buffer = await GenerateBuffer(InvoiceDataTemplate());
  const buf = Buffer.from(buffer, 'base64');
  console.log('buff', buf);
  return buf;
};

export const Mutation = {
  generateInvoice: generateInvoice,
};
