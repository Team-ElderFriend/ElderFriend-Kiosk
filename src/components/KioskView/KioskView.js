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
    Redirect,
    Link,
    useHistory
} from "react-router-dom";
import {add, remove, reduce, makecopy, usecopy, reset} from "../../actions";

const cx = classNames.bind(styles);


class preKioskView extends React.Component {
    constructor({dispatch, ...props}) {
        super(props);
        this.state = {
            category: 'recommended',
            help: '',
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
        this.onZoomMinusButtonClicked = this.onZoomMinusButtonClicked.bind(this);
        this.onZoomPlusButtonClicked = this.onZoomPlusButtonClicked.bind(this);
        this.dispatch = dispatch

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
            <img className={cx('step-1', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-2', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-3', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-4', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-5', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-6', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-7', 'hand')} src={up} alt={''}/>,
            <img className={cx('step-8', 'hand')} src={up} alt={''}/>,
        ]

        this.helpMessages = [
            <Step step={'1'} dir={'down'} message={'Click to see the burger menus.'}/>,
            <Step step={'2'} dir={'up'}
                  message={'Click to select this menu or scroll to the bottom to see more menus.'}/>,
            <Step step={'3'} dir={'right'} message={'Add this menu to the list.'}/>,
            <Step step={'4'} dir={'up'} message={'Click to see the side menus.'}/>,
            <Step step={'5'} dir={'up'} message={'Click to select this side menu.'}/>,
            <Step step={'6'} dir={'right'} message={'Add this menu to the list.'}/>,
            <Step step={'7'} dir={'right'} message={'Make payment.'}/>,
            <Step step={'8'} dir={'up'} message={'Press "Cancel" or "Confirm" depending on your decision.'}/>,
            <Step step={'0'} dir={'none'} message={'Note: This guide is automatic. Each step is shown for 3 seconds. Please do not touch the screen while the steps are being displayed.'}/>
        ]

    }

    changeCategory(category) {
        this.setState({category: category})
    }

    helpButtonClick() {
        this.dispatch(makecopy());
        this.dispatch(reset());
        this.setState({help: this.helpMessages[8]});
        setTimeout(() => {
            this.setState({hand1: this.hands[1]});
            this.setState({help: this.helpMessages[0]});
            setTimeout(() => {
                this.setState({category: 'burgers', hand1: '', hand2: this.hands[2], help: this.helpMessages[1]});
                setTimeout(() => {
                    this.setState({help: this.helpMessages[2], hand2: '', hand3: this.hands[3]});
                    setTimeout(() => {
                        this.setState({help: this.helpMessages[3], hand3: '', hand4: this.hands[4]});
                        this.dispatch(add(2, 6400));
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
                                    this.dispatch(add(17, 3100));
                                    setTimeout(() => {
                                        this.setState({help: this.helpMessages[7], hand7: '', hand8: this.hands[8]});
                                        setTimeout(() => {
                                            this.dispatch(remove(2));
                                            this.dispatch(remove(17));
                                            this.dispatch(usecopy());
                                            this.setState({
                                                category: 'recommended',
                                                help: <div>&emsp;</div>,
                                                hand8: ''
                                            });
                                        }, 3000);
                                    }, 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 6000);
    }

    getScale(level) {
        const scaleMap = {
            0: 0.6,
            1: 0.8,
            2: 1,
            3: 1.3,
            4: 1.6,
        }
        return scaleMap[level];
    }

    getCategoryButtonHeight(level) {
        return {
            0: 40,
            1: 40,
            2: 40,
            3: 40,
            4: 80,
        }[level];
    }

    onZoomSliderChange(event, newValue) {
        this.setState({
            zoom_level: newValue,
        })
    }

    onZoomMinusButtonClicked(event){
        this.setState({
            zoom_level: Math.max(this.state.zoom_level - 1, 0)
        })
    }

    onZoomPlusButtonClicked(event){
        this.setState({
            zoom_level: Math.min(this.state.zoom_level + 1, 4)
        })
    }

    render() {


        const categoryTableButtonMapper = (d, ind) => <td><CategorySelectButton className={cx('csb')}
                                                                                category={d.category}
                                                                                onCategorySelect={this.changeCategory}
                                                                                selectedCategory={this.state.category}>
            {d.text}
            {(ind === 1) ? this.state.hand1 : ''}
            {(ind === 2) ? this.state.hand4 : ''}
        </CategorySelectButton>
        </td>
        const categoryTableContent = this.state.zoom_level >= 4 ?
            ([<tr>{this.categories.slice(0, 2).map(categoryTableButtonMapper)}</tr>,
                <tr>{this.categories.map((val, ind) => {
                    return {val, ind}
                }).slice(2, 4).map(({val, ind}) => categoryTableButtonMapper(val, ind))}</tr>]) :
            <tr>
                {(this.categories.map(categoryTableButtonMapper))}
            </tr>

        const handInserterToMenu = (ind) => {
            if (this.state.category === 'burgers' && ind === 1)
                return this.state.hand2
            if (this.state.category === 'sideMenus' && ind === 1)
                return this.state.hand5;

            return ''
        }

        const handInserterToAddButton = (ind) => {
            if (this.state.category === 'burgers' && ind === 1)
                return this.state.hand3;
            if (this.state.category === 'sideMenus' && ind === 1)
                return this.state.hand6;
            return ''
        }

        return (
            <div className={cx('kiosk-view')}>
                {/* header */}
                <div className={cx('header')}>
                    <img className={cx('logo')} src={LogoImg} alt=""/>
                    <div className={cx('magnifier-image', 'left')} onClick={this.onZoomMinusButtonClicked}>
                        <img src={MagnifierImg} alt={""}/>
                        <div className={cx('inner-text')}> -</div>
                    </div>
                    <div className={cx('magnifier-image', 'right')} onClick={this.onZoomPlusButtonClicked}>
                        <img src={MagnifierImg} alt={""}/>
                        <div className={cx('inner-text')}> +</div>
                    </div>
                    <Slider className={cx('zoom-slider')} step={1} max={4} marks onChange={this.onZoomSliderChange}
                            value={this.state.zoom_level}/>
                </div>

                <ZoomContext.Provider
                    value={{zoom_level: this.state.zoom_level, zoom_scale: this.getScale(this.state.zoom_level)}}>
                    <ZoomContext.Consumer>
                        {({zoom_level, zoom_scale}) => {
                            return <FontSizeScale scale={zoom_scale}>
                                {/* category selector buttons*/}
                                <table className={cx('category-select-buttons-table')}
                                       style={{height: this.getCategoryButtonHeight(zoom_level) + 'px'}}>
                                    {categoryTableContent}
                                </table>
                                <MenuListView id='menulist' menuIds={MenuData.categoryMenus[this.state.category]}
                                              getInsertedFromInd={handInserterToMenu}
                                              getInsertedToAddButtonFromInd={handInserterToAddButton} style={{height:325+40-this.getCategoryButtonHeight(zoom_level)}}/>
                                <SelectListView id='selectlist' menuIds={MenuData.categoryMenus[this.state.category]}/>

                                <div className={cx('button-box')}>
                                <FontSizeScale scale={1/zoom_scale}>
                                <div className={cx('total-price')}><p>  Total Price:<br/> ₩{this.props.counter.sum} </p>
                                </div>
                                </FontSizeScale >
                                <FontSizeScale scale={0.5/zoom_scale}>
                                    <div>&emsp;</div>
                                </FontSizeScale>
                                <button className={cx('help-button')}
                                        onClick={this.helpButtonClick} style={{
                                    height: 59*(1+ (zoom_scale-1)*0.6) + 'px'}}>{'Guide'}</button>
                                <FontSizeScale scale={0.5/zoom_scale}>
                                    <div>&emsp;</div>
                                </FontSizeScale>
                                { (this.props.counter.sum!=0)&&
                                <NavLink className={cx('payment-button-box')} to="/components/PaymentView" >
                                    <div className={cx('kiosk-button', 'payment-button')}> Payment
                                    {this.state.hand7}
                                    {(this.state.hand8)&&<Redirect to ="/components/PaymentView"/>}
                                    </div>
                                </NavLink>}
                                </div>
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

