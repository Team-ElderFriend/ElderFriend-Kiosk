import logo from './logo.svg';
import './App.css';
import MenuListView from "./components/MenuListView";
import KioskView from "./components/KioskView";
import PaymentView from "./components/PaymentView";
import {qmbtn, clbtn} from "./components/PopupFunc";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


function App() {
    return (
        <div className="App">
            <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet"></link>

            <div className="dim-layer">
            <div className="dimBg"></div>
            <div id="layer2" className="pop-layer">
                <div className="pop-container">
                <div className="pop-conts">
                    <img className="info-picture" src="../images/menus/Jalapeno.png" alt=""></img>
                    <p className="ctxt">    
                    </p>
                    <div className="btn-r">
                    <a onClick={clbtn} className="btn-layerClose">Close</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
                        <Router>
                <Switch>
                <Route exact path="/" component={KioskView}>
            <KioskView/>
            </Route>
              <Route exact path="/components/PaymentView" component={PaymentView}>
                <PaymentView/>
                  </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;