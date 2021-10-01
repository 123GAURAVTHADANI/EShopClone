import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import image from "./image.jpg"
import logo from "./logo.png"
function App() {
  let carouselArray=[
    {
      "id":1,
      "Name":"Gaurav Thadani",
      "designation":"SDE",
      "image":"https://addicted2success.com/wp-content/uploads/2013/08/Images-43-Of-The-Most-Popular-Motivation-Picture-Quotes.png"
    },
    {
      "id":2,
      "Name":"Sachin Tendularkar",
      "image":image,
      "designation":"SDE",      
    }
  ]
  return (
    <div className="container-fluid pl-0 pr-0 mainBody">
       <div className="header-left d-flex justify-content align-center">
      <header className="header-weapp">
       
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand mobile-none" href="#">
                        <img src={logo} alt="logo" srcSet="" className="header-logo" />
                    </a>
            <ul className="mobile-device">
              <li className="nav-item">
                <a className="nav-link">Home</a>
                </li>

              </ul>
              <div className="collapse navbar-collapse justify-content-start" id="navbarTogglerDemo03">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                            <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                        
                    </div>
            </nav>
         
        </header>
        </div>

       <main> 
        <div className="container bodyDiv">
      <Carousel>
        {carouselArray && carouselArray.map((item)=>{
          return(
          <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 imageSrcSet"
            src={item.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.Name}</h3>
            <p>{item.designation}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>


        </div>
        <footer className="footer py-3 nav-bar bg-grey">
          <div className="container text-center">
            <span className="text-muted">Copyright 2021. All rights reserved</span>
            </div>
        </footer>
        </main>
     
    </div>
  );
}

export default App;











import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.carousel-inner {
  width: 100%;
  overflow: hidden;
  height:150px;
}
.imageSrcSet{
  height: 150px;
}
.bg-grey{
  background: lightgray;
}

ul.mobile-device {
  display: none;
}
a.mobile-none {
  display: block;
}
ul.mobile-device li.nav-item .nav-link {
  color: #666;
}
.header-logo{
  max-width: 90px;
}
.header-weapp
{
  background: black !important;
}
a.nav-link.active , a.nav-link:focus{
  color: orange !important;
  font-weight: 900;
  font-family: sans-serif;
  cursor: pointer;
  
}
a.nav-link:hover{
  color: orange !important;
  text-shadow: 0 0 orange;
  font-weight: 800;
  cursor: pointer;
  
}
a.nav-link{
  font-weight: 900;
  color: white !important;
}
.bodyDiv{
  width: 100%;
  margin-top: 70px;
}
header{
  transition: top 0.8s;
}
nav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top {
  background: black !important;
  border-bottom: 2px solid #dedede;
}

.navbar-toggler {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #f8f9fa;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0,0,0,.5);
  text-align: center;
}
li.nav-item {
  border-bottom: 1px solid #dedede;
  width: 100%;
}
