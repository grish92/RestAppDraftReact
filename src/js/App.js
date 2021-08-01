import { Layout } from "antd";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import "../css/App.css";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";

const { Header, Footer, Content } = Layout;
const App = () => {
  const [current, setCurrent] = useState("home");

  const changeCurrent = (current) => {
    setCurrent(current);
  };

  const page_map ={
    home:<Home/>,
    posts:<Posts/>,
    todos:<Todos/>,
    albums:<Album/>
  }
  return (
    <Layout>
      <Header>
        <Navbar current={current} handleClick={changeCurrent} />
      </Header>
      <Content>
        <div className="page_content">
         {page_map[current]}
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
