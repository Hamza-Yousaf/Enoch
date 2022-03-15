export const deleteSentTicketsFunction = (
  isDeleteSentTickets: boolean,
  sentDeleteList: string[],
  sentTickets: any,
  setDeleteAlert: any,
  setSentTickets: any,
  deleteSentTickets: any,
  addToSentDeleteList: any,
  showDeleteConfirmModal: any,
  showDeleteConfirmModalValue: any
) => {
  if (isDeleteSentTickets === true) {
    if (sentDeleteList.length === 1) {
      let markedTicket = sentTickets.filter((ticket: any) => {
        return sentDeleteList.includes(ticket.subID);
      });

      if (markedTicket[0]?.Status === "In-Progress") {
        setDeleteAlert("Not allowed to delete in progress ticket");
        setSentTickets(sentTickets);
        deleteSentTickets(false);
      } else {
        if (showDeleteConfirmModalValue === true) {
          setSentTickets(() => {
            return sentTickets.filter((ticket: any) => {
              return !sentDeleteList.includes(ticket.subID);
            });
          });
          addToSentDeleteList([]);
          deleteSentTickets(false);
          showDeleteConfirmModal(false);
        } else if (showDeleteConfirmModalValue === false) {
          deleteSentTickets(false);
          showDeleteConfirmModal(true);
        }
      }
    } else if (sentDeleteList.length > 1) {
      let markedTickets = sentTickets.filter((ticket: any) => {
        return sentDeleteList.includes(ticket.subID);
      });

      let inProgressCount = 0;
      markedTickets.forEach((ticket: any) => {
        if (ticket.Status === "In-Progress") {
          inProgressCount++;
        }
      });
      if (inProgressCount > 0) {
        setDeleteAlert("de-select in progress ticket to delete other tickets");
        deleteSentTickets(false);
      } else {
        if (showDeleteConfirmModalValue === true) {
          setSentTickets(() => {
            return sentTickets.filter((ticket: any) => {
              return !sentDeleteList.includes(ticket.subID);
            });
          });
          addToSentDeleteList([]);
          deleteSentTickets(false);
          showDeleteConfirmModal(false);
        } else if (showDeleteConfirmModalValue === false) {
          deleteSentTickets(false);
          showDeleteConfirmModal(true);
        }
        // setSentTickets(() => {
        //   return sentTickets.filter((ticket: any) => {
        //     return !sentDeleteList.includes(ticket.subID);
        //   });
        // });
        // deleteSentTickets(false);
        // addToSentDeleteList([]);
      }
    }
  }
};
