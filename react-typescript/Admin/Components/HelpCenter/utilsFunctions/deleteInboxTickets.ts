export const deleteInboxTicketsFunction = (
  isDeleteInboxTickets: boolean,
  deleteList: string[],
  inboxTickets: any,
  setDeleteAlert: any,
  setInboxTickets: any,
  deleteInboxTickets: any,
  addToDeleteList: any,
  showDeleteConfirmModal: any,
  showDeleteConfirmModalValue: any
) => {
  if (isDeleteInboxTickets === true) {
    if (deleteList.length === 1) {
      let markedTicket = inboxTickets.filter((ticket: any) => {
        return deleteList.includes(ticket.subID);
      });

      if (markedTicket[0]?.Status === "In-Progress") {
        setDeleteAlert("Not allowed to delete in progress ticket");
        setInboxTickets(inboxTickets);
        deleteInboxTickets(false);
      } else {
        if (showDeleteConfirmModalValue === true) {
          setInboxTickets(() => {
            return inboxTickets.filter((ticket: any) => {
              return !deleteList.includes(ticket.subID);
            });
          });
          addToDeleteList([]);
          deleteInboxTickets(false);
          showDeleteConfirmModal(false);
        } else if (showDeleteConfirmModalValue === false) {
          deleteInboxTickets(false);
          showDeleteConfirmModal(true);
        }
      }
    } else if (deleteList.length > 1) {
      let markedTickets = inboxTickets.filter((ticket: any) => {
        return deleteList.includes(ticket.subID);
      });

      let inProgressCount = 0;
      markedTickets.forEach((ticket: any) => {
        if (ticket.Status === "In-Progress") {
          inProgressCount++;
        }
      });
      if (inProgressCount > 0) {
        setDeleteAlert("de-select in progress ticket to delete other tickets");
        deleteInboxTickets(false);
      } else {
        if (showDeleteConfirmModalValue === true) {
          setInboxTickets(() => {
            return inboxTickets.filter((ticket: any) => {
              return !deleteList.includes(ticket.subID);
            });
          });
          addToDeleteList([]);
          deleteInboxTickets(false);
          showDeleteConfirmModal(false);
        } else if (showDeleteConfirmModalValue === false) {
          deleteInboxTickets(false);
          showDeleteConfirmModal(true);
        }
      }
    }
  }
};
