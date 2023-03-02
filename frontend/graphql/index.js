import { gql } from '@apollo/client';

const GENERATE_INVOICE_MUTATION = gql`
  mutation GENERATE_INVOICE_MUTATION($input: CustomerInput!) {
    generateInvoice(input: $input)
  }
`;
export { GENERATE_INVOICE_MUTATION };
