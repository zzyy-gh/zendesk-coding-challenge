// *** Homepage ***

import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import CustomContent from "../components/CustomContent";
import getInitialTickets from "../services/getInitialTickets";

const { Header, Content } = Layout;

function App() {
  const [data, setData] = useState(null); // store data fetched from API
  const [error, setError] = useState(null); // store display error message if any
  const [loading, setLoading] = useState(true); // to display loading spinner while data is being fetched

  // fetch data
  useEffect(() => {
    getInitialTickets({ setError, setData, setLoading }); // function to get all tickets from API
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
