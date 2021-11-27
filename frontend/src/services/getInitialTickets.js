// *** function to get all tickets from Zendesk ***
import { ERROR_MSG_500, ERROR_MSG_404 } from "../constants/error_msg";
import { INITIAL_TICKETS_URL } from "./../constants/url";

export default async function getInitialTickets({
  setError,
  setData,
  setLoading,
}) {
  fetch(INITIAL_TICKETS_URL)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 500) {
        throw new Error(ERROR_MSG_500); // error 500
      } else if (res.status === 404) {
        throw new Error(ERROR_MSG_404); // error 404
      }
    })
    .then((data) => {
      setError(null); // clear error message
      setData(data); // set data
      setLoading(false); // hide loading spinner
    })
    .catch((error) => {
      setLoading(false);
      setError(error.message); // set error message if any
    });
}
