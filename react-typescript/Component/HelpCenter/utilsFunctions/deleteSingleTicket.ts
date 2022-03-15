export const deleteSingleTicketFunction = (
  tab: string,
  inboxTickets: any,
  deleteList: string[],
  addToDraftDeleteList: any,
  addToDeleteList: any,
  deleteInboxTickets: any,
  subID: string,
  sentTickets: any,
  sentDeleteList: any,
  addToSentDeleteList: any,
  deleteSentTickets: any,
  deleteDraftTickets: any
) => {
  if (tab === "INBOX") {
    let markedTicket = inboxTickets.filter((ticket: any) => {
      return deleteList.includes(ticket.subID);
    });

    if (
      markedTicket[0] !== undefined &&
      markedTicket[0]?.Status === "In-Progress"
    ) {
      addToDeleteList([]);
      deleteInboxTickets(true);
      addToDeleteList([subID]);
    } else {
      deleteInboxTickets(true);
      addToDeleteList([subID]);
    }
  } else if (tab === "SENT") {
    let markedTicket = sentTickets.filter((ticket: any) => {
      return sentDeleteList.includes(ticket.subID);
    });

    if (
      markedTicket[0] !== undefined &&
      markedTicket[0]?.Status === "In-Progress"
    ) {
      addToSentDeleteList([]);
      deleteSentTickets(true);
      addToSentDeleteList([subID]);
    } else {
      deleteSentTickets(true);
      addToSentDeleteList([subID]);
    }
  } else {
    deleteDraftTickets(true);
    addToDraftDeleteList([subID]);
  }
};
