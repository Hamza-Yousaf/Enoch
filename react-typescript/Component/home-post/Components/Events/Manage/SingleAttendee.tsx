import React, { useEffect, useState } from "react";
import { format } from "date-fns";

interface Props {
  attendee: any;
  setCardEventId: any;
  setAttendeId: any;
  allChecked: boolean;
  setAttendeesToActOn: any;
  attendeesToActOn: any;
}

const SingleAttendee: React.FC<Props> = ({
  attendee,
  setAttendeId,
  setCardEventId,
  allChecked,
  setAttendeesToActOn,
  attendeesToActOn,
}) => {
  const [checked, setChecked] = useState(false);

  const formatDate = (time: string) => {
    if (time.length > 0) {
      return format(new Date(Number(time)), "P");
    }
  };

  const toggleChecked = () => {
    if (checked === true) {
      setChecked(false);
      let result = attendeesToActOn.filter((currentAttendee: any) => {
        return attendee.id !== currentAttendee.id;
      });
      setAttendeesToActOn(result);
    } else {
      setChecked(true);
      setAttendeesToActOn([...attendeesToActOn, attendee]);
    }
  };

  useEffect(() => {
    setChecked(allChecked);
  }, [allChecked]);

  function truncateString(str: any, num: any) {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <tr>
      <td>
        <div>
          <label className="manageevnt_check_container">
            <input type="checkbox" checked={checked} onChange={toggleChecked} />
            <span className="manageevnt_checkmark manageevnt-custm-pos"></span>
          </label>
        </div>
      </td>
      <td>
        <div className="manageevnt-tbl-events">
          <span className="manageevnt-img">
            <img
              style={{ width: 40, height: 40 }}
              src={attendee?.avatar || "/images/speaker1.png"}
              className="img-fluid"
              alt="NFT"
            />
          </span>
          <div className="manageevnt-edit-right">
            <h3>@{attendee?.username || attendee?.first_name}</h3>
            <p>{truncateString(attendee?.bio, 50) || "User bio not yet set"}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="mngEvnt-freeTickt">
          {attendee?.ticket_type || "Free Ticket"}
        </div>
      </td>
      <td>
        <div className="mngEvnt-freeTickt">
          {formatDate(attendee?.createdAt)}
        </div>
      </td>
      <td>
        {attendee?.permission === "Attending" ? (
          <div className="event-attenting">{attendee?.permission}</div>
        ) : (
          <div className="event-declined">{attendee?.permission}</div>
        )}
      </td>
      <td>
        <div>
          <div className="event-3dots dropdown">
            <span
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/images/event-dots.png"
                alt="3dots"
                className="img-fluid"
              />
            </span>
            <div className="dropdown-menu event-info-droplist">
              <ul>
                <li data-toggle="modal" data-target="#write-event-modal">
                  Message
                </li>
                <li
                  onClick={() => {
                    setAttendeId(attendee?.id);
                    setCardEventId(attendee?.event_id);
                  }}
                  data-toggle="modal"
                  data-target="#delete-participation-modal"
                >
                  Decline Participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SingleAttendee;
