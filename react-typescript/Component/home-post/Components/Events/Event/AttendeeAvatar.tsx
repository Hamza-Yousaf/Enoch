import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  GET_OTHER_USER_QUERY,
  GET_USER_PROFILE_QUERY,
} from "../../../../../graphql/queries";

interface Props {
  user_id: string;
}

const AttendeeAvatar: React.FC<Props> = ({ user_id }) => {
  const [attendee, setAttendee] = useState(null);
  const { data, loading, error } = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: user_id,
    },
  });

  useEffect(() => {
    if (data) {
      setAttendee(data?.getOtherUserProfile);
    }
  }, [data, loading]);

  console.log(attendee);
  return (
    <li>
      <img
        src={
          attendee?.profileImage
            ? attendee?.profileImage
            : "/images/people-2.png"
        }
        className="img-fluid"
        alt="attendees"
      />
    </li>
  );
};

export default AttendeeAvatar;
