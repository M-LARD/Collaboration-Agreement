import "./App.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import About from './About';
import Footer from "./Footer";

// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import { MantineProvider } from '@mantine/core';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
              <Header />
              <Main />
              <Footer />
      </div>
    );
  }
}

export default App;
