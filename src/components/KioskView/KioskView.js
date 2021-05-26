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
import LogoImg from '../../images/ui/cartoon.png'
import MagnifierImg from '../../images/ui/magnifier-2.png'
import Slider from '@material-ui/core/Slider';

import up from '../../images/directions/up.png'
import down from '../../images/directions/down.png'
import left from '../../images/directions/left.png'
import right from '../../images/directions/right.png'
import ZoomContext from "../ZoomContext/ZoomContext";
import FontSizeScale from "../FontSizeScale";
import SelectViewElement from '../SelectViewElement';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";

const cx = classNames.bind(styles);


class preKioskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'recommended',
            help: <div>&emsp;</div>,
            hand1: '',
            hand2: '',
            hand3: '',
            hand4: '',
            hand5: '',
            hand6: '',
            hand7: '',
            hand8: '',
            zoom_level: 2
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.helpButtonClick = this.helpButtonClick.bind(this);
        this.onZoomSliderChange = this.onZoomSliderChange.bind(this);

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

        this.hands = [
            '',
            <img className={cx('step-1')} src={up} alt={''}/>,
            <img className={cx('step-2')} src={up} alt={''}/>,
            <img className={cx('step-3')} src={up} alt={''}/>,
            <img className={cx('step-4')} src={up} alt={''}/>,
            <img className={cx('step-5')} src={up} alt={''}/>,
            <img className={cx('step-6')} src={up} alt={''}/>,
            <img className={cx('step-7')} src={up} alt={''}/>,
            <img className={cx('step-8')} src={up} alt={''}/>,
        ]

        this.helpMessages = [
            <Step step={'1'} dir={'down'} message={'Click to see the burger menus.'}/>,
            <Step step={'2'} dir={'up'}
                  message={'Click to select this menu or scroll to the bottom to see more menus.'}/>,
            <Step step={'3'} dir={'right'} message={'Add the selected menu to the list.'}/>,
            <Step step={'4'} dir={'up'} message={'Click to see the side menus.'}/>,
            <Step step={'5'} dir={'up'} message={'Click to select this side menu.'}/>,
            <Step step={'6'} dir={'right'} message={'Add the selected menu to the list.'}/>,
            <Step step={'7'} dir={'right'} message={'Make payment.'}/>,
            <Step step={'8'} dir={'up'} message={'Press "Cancel" or "Confirm" depending on your decision.'}/>
        ]

    }

    changeCategory(category) {
        this.setState({category: category})
    }

    helpButtonClick() {
        this.setState({hand1: this.hands[1]});
        this.setState({help: this.helpMessages[0]})
        setTimeout(() => {
            this.setState({category: 'burgers', hand1: '', hand2: this.hands[2], help: this.helpMessages[1]});
            setTimeout(() => {
                this.setState({help: this.helpMessages[2], hand2: '', hand3: this.hands[3]});
                setTimeout(() => {
                    this.setState({help: this.helpMessages[3], hand3: '', hand4: this.hands[4]});
                    setTimeout(() => {
                        this.setState({
                            category: 'sideMenus',
                            help: this.helpMessages[4],
                            hand4: '',
                            hand5: this.hands[5]
                        });
                        setTimeout(() => {
                            this.setState({help: this.helpMessages[5], hand5: '', hand6: this.hands[6]});
                            setTimeout(() => {
                                this.setState({help: this.helpMessages[6], hand6: '', hand7: this.hands[7]});
                                setTimeout(() => {
                                    this.setState({help: this.helpMessages[7], hand7: '', hand8: this.hands[8]});
                                    setTimeout(() => this.setState({
                                        category: 'recommended',
                                        help: <div>&emsp;</div>,
                                        hand8: ''
                                    }), 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);

    }

    getScale(level) {
        const scaleMap = {
            0: 0.6,
            1: 0.8,
            2: 1,
            3: 1.4,
            4: 1.8,
        }
        return scaleMap[level];
    }

    getCategoryButtonHeight(level) {
        return {
            0: 40,
            1: 40,
            2: 45,
            3: 55,
            4: 110,
        }[level];
    }

    onZoomSliderChange(event, newValue) {
        this.setState({
            zoom_level: newValue,
        })
    }

    render() {
        const categoryTableButtonMapper = d => <td><CategorySelectButton className={cx('csb')}
                                                                         category={d.category}
                                                                         text={d.text}
                                                                         onCategorySelect={this.changeCategory}
                                                                         selectedCategory={this.state.category}/></td>
        const categoryTableContent = this.state.zoom_level >= 4 ?
            ([<tr>{this.categories.slice(0, 2).map(categoryTableButtonMapper)}</tr>,
                <tr>{this.categories.slice(2, 4).map(categoryTableButtonMapper)}</tr>]) :
            <tr>
            {(this.categories.map(categoryTableButtonMapper))}
        </tr>


        return (
            <div className={cx('kiosk-view')}>
                {/* header */}
                <div className={cx('header')}>
                    <img className={cx('logo')} src={LogoImg} alt=""/>
                    <div className={cx('magnifier-image', 'left')}>
                        <img src={MagnifierImg} alt={""}/>
                        <div className={cx('inner-text')}> -</div>
                    </div>
                    <div className={cx('magnifier-image', 'right')}>
                        <img src={MagnifierImg} alt={""}/>
                        <div className={cx('inner-text')}> +</div>
                    </div>
                    <Slider className={cx('zoom-slider')} step={1} max={4} marks onChange={this.onZoomSliderChange}
                            value={this.state.zoom_level}/>
                </div>

                {/* category selector buttons*/}
                <ZoomContext.Provider
                    value={{zoom_level: this.state.zoom_level, zoom_scale: this.getScale(this.state.zoom_level)}}>
                    <ZoomContext.Consumer>
                        {({zoom_level, zoom_scale}) => {
                            return <FontSizeScale scale={zoom_scale}>
                                <table className={cx('category-select-buttons-table')}
                                       style={{height: this.getCategoryButtonHeight(zoom_level) + 'px'}}>
                                    {categoryTableContent}
                                </table>
                                <MenuListView id='menulist' menuIds={MenuData.categoryMenus[this.state.category]}/>
                                <SelectListView id='selectlist' menuIds={MenuData.categoryMenus[this.state.category]}/>

                                {this.state.help}
                                <div className={cx('total-price')}><p> Total Price:<br/> ₩{this.props.counter.sum} </p>
                                </div>
                                <div>&emsp;</div>
                                <button className={cx('help-button')}
                                        onClick={this.helpButtonClick}>{'What should I do?'}</button>
                                <div className={cx('button-box')}></div>
                                <div>&emsp;</div>
                                <div style={{display: 'inner', pointerEvents: 'none'}}>
                                {this.state.hand1}
                                {this.state.hand2}
                                {this.state.hand3}
                                {this.state.hand4}
                                {this.state.hand5}
                                {this.state.hand6}
                                {this.state.hand7}
                                {this.state.hand8}
                                </div>
                                <NavLink to="/components/PaymentView" style={{textDecoration: 'none', color: 'black'}}>
                                    <div className={cx('kiosk-button', 'payment-button')} onClick={() => {
                                    }}> Payment
                                    </div>
                                </NavLink>
                                <div>{this.state.help}</div>
                            </FontSizeScale>
                        }
                        }
                    </ZoomContext.Consumer>
                </ZoomContext.Provider>
            </div>
        );
    }
}


const mapStateToProps = function (state) {
    return {
        message: 'This is message from mapStateToProps',
        counter: state.counters || {sum: 0, selectedMenus: []}
    }
}
const KioskView = connect(mapStateToProps)(preKioskView)

export default KioskView

