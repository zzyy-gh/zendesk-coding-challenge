import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import CustomContent from "./components/CustomContent";

const { Header, Content } = Layout;

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/getInitialTickets")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 500) {
          throw new Error("There is a problem with the server.");
        } else if (res.status === 404) {
          throw new Error("There is a problem with this fetch.");
        }
      })
      .then((data) => {
        setError(null);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
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
