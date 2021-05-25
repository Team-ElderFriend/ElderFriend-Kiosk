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


const cx = classNames.bind(styles);


class preKioskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'recommended',
            help: <div>&emsp;</div>,
            zoom_level: 2,
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

    }

    getScale(level) {
        return 0.4 + level * 0.3;
    }

    onZoomSliderChange(event, newValue) {
        this.setState({
            zoom_level: newValue,
        })
    }

    render() {
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

                <ZoomContext.Provider value={{zoom_level: this.state.zoom_level, zoom_scale: this.getScale(this.state.zoom_level)}}>
                    <table className={cx('category-select-buttons-table')}>
                        <tr>

                            {(this.categories.map(d => <td><CategorySelectButton className={cx('csb')}
                                                                                 category={d.category}
                                                                                 text={d.text}
                                                                                 onCategorySelect={this.changeCategory}
                                                                                 selectedCategory={this.state.category}/>
                            </td>))}
                        </tr>
                    </table>
                    <MenuListView menuIds={MenuData.categoryMenus[this.state.category]}/>
                    <SelectListView menuIds={MenuData.categoryMenus[this.state.category]}/>

                    {this.state.help}
                    <div className={cx('total-prize')}><p> Total Price:<br/> ₩{this.props.counter.sum} </p></div>
                    <div>&emsp;</div>
                    <button className={cx('help-button')} onClick={this.helpButtonClick}>{'What should I do?'}</button>
                    <div className={cx('button-box')}></div>
                    <div>&emsp;</div>
                    <div className={cx('kiosk-button', 'payment-button')} onClick={() => {
                    }}> Payment
                    </div>
                    <div>{this.state.help}</div>
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

