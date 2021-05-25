import React from 'react'
import classNames from 'classnames/bind'
import styles from "./KioskView.scss"
import CategorySelectButton from "../CategorySelectButton";
import MenuListView from "../MenuListView";
import SelectListView from "../SelectListView";
import MenuData from "../../data/MenuData";
import Step from "../Step";
import HelpButton from "../HelpButton";
import {connect} from 'react-redux';

const cx = classNames.bind(styles);


class KioskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'recommended',
            help: '',
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.helpButtonClick = this.helpButtonClick.bind(this);

        this.categories = [
            {
                category: 'recommended',
                text: 'Recommended',
            },
            {
                category: 'burgers',
                text: 'Burgers',
            },
            {
                category: 'sideMenus',
                text: 'Side Menus',
            },
            {
                category: 'drinks',
                text: 'Drinks',
            },
        ]; 

        this.helpMessages = [
            <Step step={'1'} dir={'down'} message={'Click here to see the burger menus.'}/>,
            <Step step={'2'} dir={'up'} message={'Choose a menu. Scroll to the bottom to see more menus.'}/>,
            <Step step={'3'} dir={'right'} message={'Add the selected item to the list.'}/>,
            <Step step={'4'} dir={'up'} message={'Click this to see the side menus.'}/>,
            <Step step={'5'} dir={'up'} message={'Click to select this side menu.'}/>,
            <Step step={'6'} dir={'right'} message={'Add the selected item to the list.'}/>,
            <Step step={'7'} dir={'right'} message={'Make payment.'}/>,
            <Step step={'8'} dir={'up'} message={'Press "Cancel" or "Confirm" depending on your decision.'}/>
        ]
        
    }

    changeCategory(category) {
        this.setState({category: category})
    }

    helpButtonClick() {
        this.setState({help: this.helpMessages[0]})
        this.setState({category: 'burgers'})
        setTimeout(() => {
            this.setState({help: this.helpMessages[1]});
            setTimeout(() => {
                this.setState({help: this.helpMessages[2]});
                setTimeout(() => {
                    this.setState({help: this.helpMessages[3]});
                    setTimeout(() => {
                        this.setState({help: this.helpMessages[4]});
                        setTimeout(() => {
                            this.setState({help: this.helpMessages[5]});
                            setTimeout(() => {
                                this.setState({help: this.helpMessages[6]});
                                setTimeout(() => {
                                    this.setState({help: this.helpMessages[7]});
                                    setTimeout(() => this.setState({help: ''}), 5000);
                                }, 5000);
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
        /*
        ;
        setTimeout(() => this.setState({help: this.helpMessages[3]}), 5000);
        setTimeout(() => this.setState({help: this.helpMessages[4]}), 5000);
        setTimeout(() => this.setState({help: this.helpMessages[5]}), 5000);
        setTimeout(() => this.setState({help: this.helpMessages[6]}), 5000);
        setTimeout(() => this.setState({help: this.helpMessages[7]}), 5000);     
        */  
    }

    render() {
        return (
            <div className={cx('kiosk-view')}>
                <table className={cx('category-select-buttons-table')}>
                    <tr>

                        {(this.categories.map(d => <td><CategorySelectButton className={cx('csb')} category={d.category} text={d.text}
                                                                             onCategorySelect={this.changeCategory}
                                                                             selectedCategory={this.state.category}/>
                        </td>))}
                    </tr>
                </table>
                <MenuListView menuIds={MenuData.categoryMenus[this.state.category]}/>
                <SelectListView menuIds={MenuData.categoryMenus[this.state.category]}/>
                {this.state.help}
                <button className={cx('help-button')} onClick={this.helpButtonClick}>{'What should I do?'}</button>
                <div className={cx('kiosk-button', 'add-item-button')} onClick={()=>{}}> Add item to list </div>
                
                <div className={cx('button-box')}>
                <div className={cx('total-prize')}><p> Total Price:<br /> ₩{this.props.counter.sum} </p></div>
                <HelpButton message={'What should I do?'}/>
                <div className={cx('kiosk-button', 'payment-button')} onClick={()=>{}}> Payment </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const KioskView = connect(mapStateToProps)(preKioskView)

export default KioskView