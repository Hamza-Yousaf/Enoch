import React, { useState } from "react";

interface Props {
  allEvents: any;
  userId: string;
  searchEvents: any;
  getOnlyUserEvents: any;
  getAllEvents: any;
  setSearchSorted: any;
}

const SideBar: React.FC<Props> = ({
  allEvents,
  searchEvents,
  userId,
  getOnlyUserEvents,
  getAllEvents,
  setSearchSorted,
}) => {
  return (
    <div className="posting-event-block-right">
      <h2>Events</h2>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              getAllEvents();
              setSearchSorted(false);
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              getOnlyUserEvents();
              setSearchSorted(true);
            }}
          >
            My Events
          </a>
        </li>
        <li>
          <a href="#">Attending</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
