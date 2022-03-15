import {gql} from '@apollo/client'

export const REQUEST_PRIVET_COMMUNITY = gql`
mutation
reqPrivetCommunity(
  $message:String!
  $communityId:String!
)
{
  requestjoinPrivateCommunity(message:$message communityId:$communityId)
  {
    errors
    success
  }
}

`