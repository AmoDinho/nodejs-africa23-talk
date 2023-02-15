import { GenerateBuffer } from '../libs';
import { InvoiceDataTemplate } from '../templates';
const generateInvoice = async (
  parent: undefined,
  { name }: { name: string }
): Promise<String | null> => {
  const buffer = await GenerateBuffer(InvoiceDataTemplate());
  console.log('buff', buffer);
  return 'hi';
};

export const Mutation = {
  generateInvoice: generateInvoice,
};
