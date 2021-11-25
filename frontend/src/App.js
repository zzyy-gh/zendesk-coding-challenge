import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import CustomContent from "./components/CustomContent";

const { Header, Content } = Layout;

function App() {
  const [data, setData] = useState(null); // data fetched from API
  const [error, setError] = useState(null); // to display error message if any
  const [loading, setLoading] = useState(true); // to display loading spinner while data is being fetched

  useEffect(() => {
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
  }, []);

  return (
    <Layout>
      <Header className="header">Zendesk Coding Challenge - Zheng Yang</Header>
      <Content className="content">
        {loading ? <Spin /> : error ? error : <CustomContent data={data} />}
      </Content>
    </Layout>
  );
}

export default App;
