import logo from './logo.svg';
import './App.css';
import MenuListView from "./components/MenuListView";
import KioskView from "./components/KioskView";
import {qmbtn, clbtn} from "./components/PopupFunc";


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
            <KioskView/>
        </div>
    );
}

export default App;