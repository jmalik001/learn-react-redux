import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("card props ", this.props);
    const profile = this.props;
    return (
      <div className="card" style={{ width: "250px" }}>
        <img
          className="card-img-top"
          src={profile.avatar_url}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{profile.name}</h4>
          <p className="card-text">{profile.company}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
