import { gql } from "@apollo/client";

export const CREATE_A_DOCUMENT_POST_OTHER = gql`
mutation addUrlDoc(
  $documentUrl:String!
  $whoCanSeePost: String!
  $fileExtentions:String!
  $docxSize:Float!
  $filename: String!
  $postingAs: String!
  $title: String!
){
  createDocumentPostOther( 
   documentUrl: $documentUrl
   whoCanSeePost: $whoCanSeePost
   fileExtentions: $fileExtentions
   docxSize: $docxSize
   filename: $filename
    postingAs: $postingAs
    title: $title
  )
}
`;