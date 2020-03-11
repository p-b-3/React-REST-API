import React, { Component } from "react";

class Conferences extends Component {
  render() {
    return (
      <div>
        {this.props.conferenceList.map(conference => {
          console.log(conference.title);
          return <p> {conference.title} </p>;
        })}
      </div>
    );
  }
}

export default Conferences;
