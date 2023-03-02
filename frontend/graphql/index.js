const GENERATE_INVOICE_MUTATION = `
mutation GENERATE_INVOICE_MUTATION($input: CustomerInput!) {
    generateInvoice(input: $input)
  }
`;
export { GENERATE_INVOICE_MUTATION };
