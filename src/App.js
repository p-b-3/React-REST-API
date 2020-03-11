import React, { Component } from "react";
import Conferences from "./Conferences";
import ConferenceDetail from "./ConferenceDetail";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {
    conferenceList: []
  };

  componentDidMount() {
    this.fechConferences();
  }

  fechConferences = async () => {
    const res = await axios.get("http://127.0.0.1:8000/events/?format=json");
    this.setState({ conferenceList: res.data });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div classname="container">
            <Route
              path="/conferences"
              render={routeProps => (
                <Conferences
                  {...routeProps}
                  conferenceList={this.state.conferenceList}
                />
              )}
            />
            <Route path="/conferences/:id" component={ConferenceDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
