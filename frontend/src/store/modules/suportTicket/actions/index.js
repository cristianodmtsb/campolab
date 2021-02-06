import createTicketCall from "./creators/createTicketCall";
import loadTickets from "./creators/loadTickets";
import loadTicketsCategories from "./creators/loadTicketsCategories";

export default {
  ...loadTickets,
  ...createTicketCall,
  ...loadTicketsCategories,
};
