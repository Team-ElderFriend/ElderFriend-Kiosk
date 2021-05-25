import React from 'react'
import classNames from 'classnames/bind'
import styles from "./HelpButton.scss"
import CategorySelectButton from "../CategorySelectButton";
import MenuListView from "../MenuListView";
import SelectListView from "../SelectListView";
import MenuData from "../../data/MenuData";
import Step from "../Step"

const cx = classNames.bind(styles);

class HelpButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = 1;
        this.message = props.message;
        this.helpMessages = [
            {
                1: <Step step={'1'} dir={'down'} message={'Click here to see the burger menus.'}/>
            }, 
            {
                2: <Step step={'2'} dir={'up'} message={'Choose a menu. Scroll to the bottom to see more menus.'}/>
            }, 
            {
                3: <Step step={'3'} dir={'right'} message={'Add the selected item to the list.'}/>
            },
            {
                4: <Step step={'4'} dir={'up'} message={'Click this to see the side menus.'}/>
            },
            {
                5: <Step step={'5'} dir={'up'} message={'Click to select this side menu.'}/>
            },
            {
                6: <Step step={'6'} dir={'right'} message={'Add the selected item to the list.'}/>
            },
            {
                7: <Step step={'7'} dir={'right'} message={'Make payment.'}/>
            },
            {
                8: <Step step={'8'} dir={'up'} message={'Press "Cancel" or "Confirm" depending on your decision.'}/>
            },
        ]; 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
    }

    render() {
        return (
            <button className={cx('kiosk-button')} onClick={this.handleClick}>{this.message}</button>
        );
    }

}

export default HelpButton