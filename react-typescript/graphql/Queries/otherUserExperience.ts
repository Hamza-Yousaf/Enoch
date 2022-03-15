import { gql } from "@apollo/client";

export const otherUserExperienceQuery = gql`
  query otherUserExp($id: String!) {
    getOthereUserExperience(otherUserId: $id) {
      id
      title
      company
      employment_type
      location
      currently_working
    }
  }
`;

export const userExperienceQuery = gql`
  {
    getUserExperience {
      id
      title
      company
      employment_type
      location
      currently_working
    }
  }
`;
