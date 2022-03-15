import {gql} from "@apollo/client"

export const ADD_EXPERIENCE = gql `
mutation adExp(
    $employment_type:String!
    $description:String!
    $headline:String!
    $currentyly_working:Boolean!
    $location:String!
    $company: String!
    $title:String!
  ) {
    addExperience( 
      employment_type:$employment_type
      description:$description
      headline:$headline
      currentyly_working:$currentyly_working
      location:$location
      company:$company
      title:$title
      
    )
  }
`;