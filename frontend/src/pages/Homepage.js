// *** Homepage ***

import { useState, useEffect } from "react";
import { Layout } from "antd";
import CustomContent from "../components/CustomContent";
import getInitialTickets from "../services/getInitialTickets";

const { Header, Content } = Layout;

function Homepage() {
  const [data, setData] = useState(null); // store data fetched from API
  const [error, setError] = useState(null); // store display error message if any
  const [loading, setLoading] = useState(true); // to display loading spinner while data is being fetched

  // fetch data
  useEffect(() => {
    async function fetchData() {
      const { error, data } = await getInitialTickets();
      setData(data);
      setError(error);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Header className="header">Zendesk Coding Challenge - Zheng Yang</Header>
      <Content className="content">
        <CustomContent data={data} error={error} loading={loading} />
      </Content>
    </Layout>
  );
}

export default Homepage;
