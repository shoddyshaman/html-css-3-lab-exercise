import React,{Component} from 'react'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownMenu:false
    }
  }
  
  toggleDropdown = () => {
    this.setState({dropdownMenu: !this.state.dropdownMenu})
  }

  render(){
    return (
      <section className="App-body">
        <div className="navbar">
          <div className="container">
              <img className="logo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Start Bootstrap"/>
              <nav className="desktop-menu">
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTACT</span>
              </nav>
              <div className="dropdown" onClick={this.toggleDropdown}><button className="btn-menu">MENU</button></div>
              {this.state.dropdownMenu
              ?(
                <nav className="mobile-menu">
                  <span>SERVICES</span>
                  <span>PORTFOLIO</span>
                  <span>ABOUT</span>
                  <span>TEAM</span>
                  <span>CONTACT</span>
                </nav>
              )
            : null}
          </div>
        </div>
        <header className="App-header">
          <div className="container-2">
            <h3>Welcome To Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button className="btn-tell-me-more">TELL ME MORE</button>
          </div>
        </header>
      </section>
    )
  }
}

export default App;
