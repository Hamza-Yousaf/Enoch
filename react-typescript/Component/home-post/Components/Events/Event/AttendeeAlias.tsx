import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_OTHER_USER_QUERY } from "../../../../../graphql/queries";

interface Props {
  user_id: string;
  attendeesCount: number;
}

const AttendeeAlias: React.FC<Props> = ({ user_id, attendeesCount }) => {
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
  return (
    <a href="#">
      {attendee?.userName} and {attendeesCount} other attendees
    </a>
  );
};

export default AttendeeAlias;
