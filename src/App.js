import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      discord_id: "-1",
      profile: {},
        page_id: "home",
        page: this.Home(),
    }
  }

  tick(){
    this.render();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            {this.Home()}
          </p>
        </header>
      </div>
    );
  }

  setPage_home(props){
    this.setState({page: this.Home()});
  }

  setPage_login(props){
    this.setState({page: this.Login()});
  }

  setPage_about(props){
    this.setState({page: this.About()});
  }

  setPage_profile(props){
    this.setState({page: this.Profile()});
  }

  setPage_maps(props){
    this.setState({page: this.Maps()});
  }

  setPage_actions(props){
    this.setState({page: this.Actions()});
  }
  
  Home(props){
    return(
      <div>
        <p>
          <div className="home">
            Home
          </div>
          <button type="button"className="tabs" id="login_button" onclick={this.setPage_login}>Log In</button>
          <button type="button"className="tabs" id="about_button" onclick={this.setPage_about}>About</button>
          <button type="button"className="tabs" id="profile_button" onclick={this.setPage_profile}>Profile</button>
          <button type="button"className="tabs" id="maps_button" onclick={this.setPage_maps}>Maps</button>
          <button type="button"className="tabs" id="actions_button" onclick={this.setPage_actions}>Actions</button>
        </p>
      </div>
    );
  }
  
  Login(props){
    return(
      <div>
        <p className="login">
          Log In
        </p>
          <button type="button"className="tabs-home" id="home_button" onclick={this.setPage_home}>Home</button>
          <button type="button"className="tabs" id="about_button" onclick={this.setPage_about}>About</button>
          <button type="button"className="tabs" id="profile_button" onclick={this.setPage_profile}>Profile</button>
          <button type="button"className="tabs" id="maps_button" onclick={this.setPage_maps}>Maps</button>
          <button type="button"className="tabs" id="actions_button" onclick={this.setPage_actions}>Actions</button>
      </div>
    );
  }
  
  About(props){
    return(
      <div>
        <p className="about">
          About
        </p>
          <button type="button"className="tabs" id="login_button" onclick={this.setPage_home}>Log In</button>
          <button type="button"className="tabs-home" id="home_button" onclick={this.setPage_login}>Home</button>
          <button type="button"className="tabs" id="profile_button" onclick={this.setPage_profile}>Profile</button>
          <button type="button"className="tabs" id="maps_button" onclick={this.setPage_maps}>Maps</button>
          <button type="button"className="tabs" id="actions_button" onclick={this.setPage_actions}>Actions</button>
      </div>
    );
  }
  
  Profile(props){
    return(
      <div>
        <p className="profile">
          Profile
        </p>
          <button type="button"className="tabs" id="login_button" onclick={this.setPage_home}>Log In</button>
          <button type="button"className="tabs" id="about_button" onclick={this.setPage_about}>About</button>
          <button type="button"className="tabs-home" id="home_button" onclick={this.setPage_login}>Home</button>
          <button type="button"className="tabs" id="maps_button" onclick={this.setPage_maps}>Maps</button>
          <button type="button"className="tabs" id="actions_button" onclick={this.setPage_actions}>Actions</button>
      </div>
    );
  }
  
  Maps(props){
    return(
      <div>
        <p className="maps">
          Maps
        </p>
          <button type="button"className="tabs" id="login_button" onclick={this.setPage_home}>Log In</button>
          <button type="button"className="tabs" id="about_button" onclick={this.setPage_about}>About</button>
          <button type="button"className="tabs" id="profile_button" onclick={this.setPage_profile}>Profile</button>
          <button type="button"className="tabs-home" id="home_button" onclick={this.setPage_login}>Home</button>
          <button type="button"className="tabs" id="actions_button" onclick={this.setPage_actions}>Actions</button>
      </div>
    );
  }
  
  Actions(props){
    return(
      <div>
        <p className="actions">
          Actions
        </p>
          <button type="button"className="tabs" id="login_button" onclick={this.setPage_home}>Log In</button>
          <button type="button"className="tabs" id="about_button" onclick={this.setPage_about}>About</button>
          <button type="button"className="tabs" id="profile_button" onclick={this.setPage_profile}>Profile</button>
          <button type="button"className="tabs" id="maps_button" onclick={this.setPage_maps}>Maps</button>
          <button type="button"className="tabs-home" id="home_button" onclick={this.setPage_login}>Home</button>
      </div>
    );
  }
  
  /*GalanERR(){
    return(
      <div>
        <p className="error">
          ERR
        </p>
      </div>
    );
  }*/
}



export default App;