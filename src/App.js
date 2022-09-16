import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import Header from "./Header";
import About from "./About";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Welcome from "./Welcome";
import Footer from "./Footer";
import SavedCities from "./SavedCities";
import SearchForm from "./SearchForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import { MantineProvider } from '@mantine/core';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                this.props.auth0.isAuthenticated ? (
                  <>
                    <Profile />
                    <Logout />
                    {/* <SavedCities/> */}
                    <SearchForm />
                  </>
                ) : (
                  <>
                    <Login />
                    <Welcome />
                  </>
                )
              } ></Route>
            <Route exact
              path="/SavedCities"
              element={
                <SavedCities />}>
            </Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
