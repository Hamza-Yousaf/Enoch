import { gql } from "@apollo/client";

export const setOnlineStatus = gql`
  mutation setStatus {
    setOnlineStatus
  }
`;

export const RecieveUser_Network_Status = gql` 
  mutation RecievUserNetworkStatus($status: Boolean!){
    RecievUserNetworkStatus(status: $status)
  }
`;