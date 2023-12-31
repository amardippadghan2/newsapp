import "./App.css";

import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={6} country="in" category="general" />}
            />

            <Route
              path="/business"
              element={
                <>
                  <News pageSize={6} country="in" category="businees" />
                </>
              }
            />

            <Route
              path="/science"
              element={
                <>
                  <News pageSize={6} country="in" category="science" />
                </>
              }
            />

            <Route
              path="/health"
              element={
                <>
                  <News pageSize={6} country="in" category="health" />
                </>
              }
            />

            <Route
              path="/entertainment"
              element={
                <>
                  <News pageSize={6} country="in" category="entertainment" />
                </>
              }
            />

            <Route
              path="/sports"
              element={
                <>
                  <News pageSize={6} country="in" category="sports" />
                </>
              }
            />

            <Route
              path="/technology"
              element={
                <>
                  <News pageSize={6} country="in" category="technology" />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
