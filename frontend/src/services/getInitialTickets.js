// *** function to get all tickets from Zendesk ***

export default async function getInitialTickets({
  setError,
  setData,
  setLoading,
}) {
  fetch("/getInitialTickets")
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 500) {
        throw new Error("There is a problem with the server."); // error 500
      } else if (res.status === 404) {
        throw new Error("There is a problem with this fetch."); // error 404
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
