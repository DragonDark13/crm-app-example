import { gql } from "@apollo/client";

export const ADD_NOTE = gql`
  mutation updateCustomerMutation($_id: ID!, $notes: [CustomerNoteInput!]!) {
    updateCustomer(_id: $_id, input: { notes: $notes }) {
      _id
      createdAt
      updatedAt
      name
      email
      phone
      company
      notes {
        description
      }
    }
  }
`;