import React from "react";
import CardList from '../card/CardList'
import Form from '../card/Form'

// const HomePage = () => (
// <div clasName="card" style="width:400px">
//     <img clasName="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%"/>
//     <div clasName="card-body">
//       <h4 clasName="card-title">John Doe</h4>
//       <p clasName="card-text">Some example text some example text. John Doe is an architect and engineer</p>
//       <a href="#" clasName="btn btn-primary">See Profile</a>
//     </div>
//   </div>
// );

class CardHomePage extends React.Component {
 testData = [
        {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

state = {
    profiles: [],
}

addProfile = (profile) => {
this.setState((prevState) => ({
    profiles: [... prevState.profiles , profile], 
}))
}

  render() {
    return <div>
        <Form onSubmit= {this.addProfile}/>
         <CardList profiles= {this.state.profiles}></CardList>
         </div>;
  }
}

export default CardHomePage;
