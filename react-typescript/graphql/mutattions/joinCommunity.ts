import {gql} from '@apollo/client'

export const JOIN_COMMUNITY = gql`
mutation
join($communityId: String!)
{
  joinCommunity(communityId:$communityId)
}

`