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
        <p className="menu_title">
            Home
          
        </p>
        {this.Menu(props, 0)}
      </div>
    );
  }
  
  Login(props){
    return(
      <div>
        <p className="menu_title">
          Log In
        </p>
        {this.Menu(props, 1)}
      </div>
    );
  }
  
  About(props){
    return(
      <div>
        <p className="menu_title">
          About
        </p>
        {this.Menu(props, 2)}
      </div>
    );
  }
  
  Profile(props){
    return(
      <div>
        <p className="menu_title">
          Profile
        </p>
        {this.Menu(props, 3)}
      </div>
    );
  }
  
  Maps(props){
    return(
      <div>
        <p className="menu_title">
          Maps
        </p>
        {this.Menu(props, 4)}
      </div>
    );
  }
  
  Actions(props){
    return(
      <div>
        <p className="menu_title">
          Actions
        </p>
        {this.Menu(props, 5)}
      </div>
    );
  }

  Menu(props, empha){
    switch(empha){
      case 0:
      return(
        <div>
          <button type="button"className= "tabs-empha" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
          <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
          <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
          <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
          <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
          <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
        </div>
      );
      case 1:
        return(
          <div>
            <button type="button"className= "tabs" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs-empha" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
      case 2:
        return(
          <div>
            <button type="button"className= "tabs" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs-empha" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
      case 3:
        return(
          <div>
            <button type="button"className= "tabs" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs-empha" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
      case 4:
        return(
          <div>
            <button type="button"className= "tabs" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs-empha" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
      case 5:
        return(
          <div>
            <button type="button"className= "tabs" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs-empha" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
      default:
        return(
          <div>
            <button type="button"className= "tabs-empha" id="home_button" onClick={(e) => this.setPage_home(props, e)}>Home</button>
            <button type="button"className="tabs" id="login_button" onClick={(e) => this.setPage_login(props, e)}>Log In</button>
            <button type="button"className="tabs" id="about_button" onClick={(e) => this.setPage_about(props, e)}>About</button>
            <button type="button"className="tabs" id="profile_button" onClick={(e) => this.setPage_profile(props, e)}>Profile</button>
            <button type="button"className="tabs" id="maps_button" onClick={(e) => this.setPage_maps(props, e)}>Maps</button>
            <button type="button"className="tabs" id="actions_button" onClick={(e) => this.setPage_actions(props, e)}>Actions</button>
          </div>
        );
    }
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