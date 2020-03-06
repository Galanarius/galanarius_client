import React from 'react';
import logo from './logo.svg';
import './App.css';

class App{
  constructor(){
    this.state = {
      page_id: 'home',
      discord_id: '-1',
      
    }
  }
  App(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p className="Home-title">
            { this.Page('home')}
          </p>
        </header>
      </div>
    );
  }
  
  Page(type){
    let pages = {
      "home": this.Home(),
      "login": this.Login(),
      "about": this.About(),
      "profile": this.Profile(),
      "maps": this.Maps(),
      "actions": this.Actions(),
    }
      return pages[type];
  }
  
  Home(){
    return(
      <div>
        <p>
          Home
        </p>
      </div>
    );
  }
  
  Login(){
    return(
      <div>
        <p>
          Log In
        </p>
      </div>
    );
  }
  
  About(){
    return(
      <div>
        <p>
          About
        </p>
      </div>
    );
  }
  
  Profile(){
    return(
      <div>
        <p>
          Profile
        </p>
      </div>
    );
  }
  
  Maps(){
    return(
      <div>
        <p>
          Map
        </p>
      </div>
    );
  }
  
  Actions(){
    return(
      <div>
        <p>
          Actions
        </p>
      </div>
    );
  }
  
  /*GalanERR(){
    return(
      <div>
        <p>
          ERR
        </p>
      </div>
    );
  }*/
}



export default App;