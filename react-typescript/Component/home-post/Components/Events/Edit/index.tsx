import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_EVENT_QUERY } from "../../../../../graphql/queries";
import dynamic from "next/dynamic";
const EditEventsForm = dynamic(() => import("../Manage/EditEventsForm"));


interface Props {
  eventId: any;
}

const EventEdit: React.FC<Props> = ({ eventId }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [event, setEvent] = useState(null);

  const eventQueryData = useQuery(SINGLE_EVENT_QUERY, {
    variables: {
      id: eventId,
    },
  });

  console.log(eventQueryData);

  useEffect(() => {
    setEventTitle(eventQueryData?.data?.singleEvent?.title);
  }, [eventQueryData?.data]);

  console.log(eventTitle);

  return (
    <div
      id="manageEvents"
      className="postCatTabcontent postCatTabcontent-d-block"
    >
      <div className="Edit-event-marketplace">
        <h2>
          Edit Event - <span>{eventTitle}</span>
        </h2>
        <EditEventsForm />
      </div>
    </div>
  );
};

export default EventEdit;
