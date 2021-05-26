import React from 'react'
import classNames from 'classnames/bind'
import styles from "./SelectViewElement.scss"
import menuData from "../../data/MenuData"
import {qmbtn, clbtn} from '../PopupFunc';
import {connect} from 'react-redux';
import {add, reduce, remove} from '../../actions';
import ZoomContext from "../ZoomContext";
const cx = classNames.bind(styles);

function getSize(zoomLevel) {
    return {
        0: {
            width: 67,
            height: 135,
        },
        1: {
            width: 67,
            height: 135,
        },
        2: {
            width: 70,
            height: 180,
        },
        3: {
            width: 104,
            height: 260,
        },
        4: {
            width: 160,
            height: 350,
        },

    }[zoomLevel]
}

const preSelectViewInnerElement = ({menuId, menuNumber, menuName, menuPrice, imageSrc, counter, dispatch, ...props}) => {
    return (
        <ZoomContext.Consumer>
            {
                ({zoom_level}) => {
                    const size = getSize(zoom_level)
                    return <div className={cx('select-view-element-outer-box')} {...props} style={{width:size.width+'px', height: size.height+'px'}}>
                        <div className={cx('inner-box')}>
                            <div className={cx('add-reduce-box')}>
                    <span className={cx('minus-box')}>
                   <i className="fas fa-minus-circle" onClick={() => dispatch(reduce(menuId))}></i>
                    </span>
                                {menuNumber}

                                <span className={cx('plus-box')}>
                    <i className="fas fa-plus-circle" onClick={() => dispatch(add(menuId, menuPrice))}></i>
                    </span>
                            </div>
                            <img alt="" className={cx('image')} src={imageSrc}/>
                            <div className={cx('name-label')}>
                                {menuName} <i onClick={qmbtn} className="far fa-question-circle"></i>
                            </div>
                            <div className={cx('price-label')}>
                                ₩{menuPrice}
                            </div>
                            <div className={cx('remove-box')}>
                                <button className={cx('remove-button')}
                                        onClick={() => dispatch(remove(menuId))}>Remove
                                </button>
                            </div>
                        </div>
                    </div>
                }
            }
                </ZoomContext.Consumer>
    )
};

const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const SelectViewInnerElement = connect(mapStateToProps)(preSelectViewInnerElement)


const SelectViewElement = ({menuId, menuNumber})=>{
    const menu = menuData.menus[menuId];
    return (
        <SelectViewInnerElement menuId={menuId} menuNumber={menuNumber} menuName={menu.menuName} menuPrice={menu.menuPrice} imageSrc={menu.imgSrc}/>
    )
}




export default SelectViewElement
