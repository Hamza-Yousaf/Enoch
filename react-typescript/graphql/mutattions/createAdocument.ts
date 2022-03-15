import { gql } from "@apollo/client";

export const CREATE_A_DOCUMENT_POST = gql`
mutation
addDocumentPost(
 $whoCanSeePost:String!
 $docxSize : Float!
 $postingAs:String!
 $text:String!
 $title:String!
 $file:Upload!
)
{
 createDocumentPost(
   whoCanSeePost:$whoCanSeePost
   docxSize:$docxSize
   postingAs:$postingAs
   text:$text
   title:$title
   file:$file
 )
}
`;