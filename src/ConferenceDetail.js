import React, { Component } from "react";

import axios from "axios";

class ConferenceDetail extends Component {
  state = {
    conference: { title: "loading" }
  };

  componentDidMount() {
    this.fetchConference();
  }

  fetchConference = async () => {
    const {
      match: { params }
    } = this.props;

    const res = await axios.get(
      `http://127.0.0.1:8000/events/?format=json/{params.id}`
    );
    this.setState({ conference: res.data });
  };

  render() {
    return <div>{this.state.conference.title}</div>;
  }
}

export default ConferenceDetail;
