// *** function to get all tickets from Zendesk ***
import { ERROR_MSG_500, ERROR_MSG_404 } from "../constants/error_msg";
import { TICKETS_URL_POSTFIX } from "./../constants/url";

export function cleanedValues(status, resJson) {
  var error = null;
  var data = null;
  if (status === 200) {
    error = null;
    data = resJson;
  } else if (status === 500) {
    error = ERROR_MSG_500;
    data = null;
  } else if (status === 404) {
    error = ERROR_MSG_404;
    data = null;
  }
  return { error, data };
}

export default async function getInitialTickets() {
  const res = await fetch(TICKETS_URL_POSTFIX);
  const status = res.status;
  var resJson = null;
  if (status === 200) {
    resJson = await res.json();
  }
  return cleanedValues(status, resJson);
}
