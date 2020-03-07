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
            {this.state.page}
          </p>
        </header>
      </div>
    );
  }

  setPage_home(props){
    this.setState({page_id: "home", page: this.Home()});
  }

  setPage_login(props){
    this.setState({page_id: "login", page: this.Login()});
  }

  setPage_about(props){
    this.setState({page_id: "about", page: this.About()});
  }

  setPage_profile(props){
    this.setState({page_id: "profile", page: this.Profile()});
  }

  setPage_maps(props){
    this.setState({page_id: "maps", page: this.Maps()});
  }

  setPage_actions(props){
    this.setState({page_id: "actions", page: this.Actions()});
  }
  
  Home(props){
    return(
      <div>
        <p>
          <div className="home">
            Home
          </div>
          {this.Menu(props)}
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
        {this.Menu(props)}
      </div>
    );
  }
  
  About(props){
    return(
      <div>
        <p className="about">
          About
        </p>
        {this.Menu(props)}
      </div>
    );
  }
  
  Profile(props){
    return(
      <div>
        <p className="profile">
          Profile
        </p>
        {this.Menu(props)}
      </div>
    );
  }
  
  Maps(props){
    return(
      <div>
        <p className="maps">
          Maps
        </p>
        {this.Menu(props)}
      </div>
    );
  }
  
  Actions(props){
    return(
      <div>
        <p className="actions">
          Actions
        </p>
        {this.Menu(props)}
      </div>
    );
  }

  Menu(props){
    return(
      <div>
        <button type="button"className="tabs-home" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
        <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
        <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
        <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
        <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
        <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
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