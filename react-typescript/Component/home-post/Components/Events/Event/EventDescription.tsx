import { useQuery } from "@apollo/client";
import React from "react";
import { GET_OTHER_USER_QUERY } from "../../../../../graphql/queries";

export interface eventProps {
  event: any;
}

const EventDescription: React.FC<eventProps> = ({ event }) => {
  return (
    <div className="your-event-about-sect">
      <h1>About</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDescription;
