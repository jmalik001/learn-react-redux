import React from "react";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async event => {
    console.log(this.state.userName);
    event.preventDefault();

    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    ).then((resp) =>resp.json())
    .then((data) => this.props.onSubmit(data));
    //console.log(resp.json());
    // this.props.onSubmit(resp.json());
   this.setState({
       ...this.state, userName: ''
   })
  };
  render() {
    return (
      <div className="jumbotron " style={{ width: "500px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="GitHub User Name"
             value={this.state.userName}
            onChange={event =>
              this.setState({
                userName: event.target.value
              })
            }
            required
          ></input>
          <button className="btn btn-primary ml-3">Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
