import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  GET_ATTENDEES_QUERY,
  SINGLE_EVENT_QUERY,
} from "../../../../../graphql/queries";
import dynamic from "next/dynamic";
const SingleAttendee = dynamic(() => import("./SingleAttendee"));


interface Props {
  eventId: any;
  setCardEventId: any;
  setAttendeId: any;
  setAttendeesToActOn: any;
  attendeesToActOn: any;
}

const ManageAttendees: React.FC<Props> = ({
  eventId,
  setAttendeId,
  setCardEventId,
  attendeesToActOn,
  setAttendeesToActOn,
}) => {
  const [eventTitle, setEventTitle] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [event, setEvent] = useState(null);
  const [marking, setMarking] = useState(false);
  const [isListeningTo, setIsListeningTo] = useState("self");
  const [allChecked, setAllChecked] = useState(false);

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

  const attendeesQuerydata = useQuery(GET_ATTENDEES_QUERY, {
    variables: {
      eventId: eventId,
      limit: 50,
    },
  });

  useEffect(() => {
    setAttendees(attendeesQuerydata?.data?.getEventAttendees?.attendees);
    setAttendeesCount(attendeesQuerydata?.data?.getEventAttendees?.count);
  }, [attendeesQuerydata?.data]);

  const toggleAllChecked = () => {
    if (allChecked === true) {
      setAllChecked(false);
      setAttendeesToActOn([]);
    } else {
      setAllChecked(true);
      setAttendeesToActOn(attendees);
    }
  };

  console.log(attendees);

  return (
    <div
      id="manageEvents"
      className="postCatTabcontent postCatTabcontent-d-block"
    >
      <div className="manageevent-content-filter">
        <h2>Manage Attendees</h2>
      </div>
      <div className="event-seminer-table-block manageevnt-table-responsive">
        <table className="table manageevnt-tbl manage-edit-tbl">
          {attendeesToActOn?.length > 0 ? (
            <thead>
              <tr>
                <th scope="col">
                  <label className="manageevnt_check_container">
                    <input
                      type="checkbox"
                      className="mass-select"
                      checked={allChecked}
                      onChange={toggleAllChecked}
                    />
                    <span className="manageevnt_checkmark"></span>
                  </label>
                </th>
                <th scope="col">
                  <div className="manageevnt-send-grp">
                    <div
                      className="manageevnt-send-msg"
                      data-toggle="modal"
                      data-target="#write-event-modal"
                    >
                      <span>
                        <img
                          src="/images/event-msg.png"
                          className="img-fluid manageevnt-msg1"
                          alt="message"
                        />
                        <img
                          src="/images/event-msg2.png"
                          className="img-fluid manageevnt-msg2"
                          alt="message"
                        />
                      </span>
                      Message
                    </div>
                    <div
                      className="manageevnt-decline-msg"
                      data-toggle="modal"
                      data-target="#delete-multiple-participation-modal"
                      onClick={() => {
                        setCardEventId(eventId);
                      }}
                    >
                      <span>
                        <img
                          src="/images/decline-img1.png"
                          className="img-fluid manageevnt-decmsg1"
                          alt="message"
                        />
                        <img
                          src="/images/decline-img2.png"
                          className="img-fluid manageevnt-decmsg2"
                          alt="message"
                        />
                      </span>
                      Decline Participation
                    </div>
                  </div>
                </th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">
                  <div onClick={toggleAllChecked} className="decline-close">
                    <img
                      src="/images/decline-img3.png"
                      className="img-fluid manageevnt-decmsg1"
                      alt="message"
                    />
                  </div>
                </th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr>
                <th scope="col">
                  <label className="manageevnt_check_container">
                    <input
                      type="checkbox"
                      checked={allChecked}
                      onChange={toggleAllChecked}
                      className="mass-select"
                    />
                    <span className="manageevnt_checkmark"></span>
                  </label>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Ticket Type</th>
                <th scope="col">Date</th>
                <th scope="col">Permission</th>
                <th scope="col"></th>
              </tr>
            </thead>
          )}

          <tbody>
            {attendees?.length > 0
              ? attendees.map((attendee) => {
                  return (
                    <SingleAttendee
                      attendeesToActOn={attendeesToActOn}
                      allChecked={allChecked}
                      attendee={attendee}
                      setCardEventId={setCardEventId}
                      setAttendeId={setAttendeId}
                      setAttendeesToActOn={setAttendeesToActOn}
                    />
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAttendees;
