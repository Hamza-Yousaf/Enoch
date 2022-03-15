import {gql} from '@apollo/client'

export const EDIT_COMMUNITY = gql`
mutation
editCommunity(
  $communityId:String!
  $about:String!
  $communityType:String!
  $communityName: String!
  $adult_community:Boolean!
)
{
  editCommunity(
    communityId:$communityId
    about:$about
    communityType:$communityType
    CommunityInput:{
      communityName: $communityName
      adult_community: $adult_community
    }
    
  ){
    errors
     success
  }
}

`