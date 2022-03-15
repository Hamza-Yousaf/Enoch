import {gql} from '@apollo/client'

export const EDIT_COMMUNITY_HEADER_IMAGE = gql`
mutation
editCommunityImage(
  $image:String!
  $communityId:String!
)
{
  editCommunityImage(image:$image, communityId:$communityId){
    success
    errors
  }
}

`