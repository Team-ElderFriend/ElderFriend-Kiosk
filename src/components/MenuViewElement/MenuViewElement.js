import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuViewElement.scss"
import menuData from "../../data/MenuData"
import {qmbtn, clbtn} from '../PopupFunc';
import {connect} from 'react-redux';
import {add} from '../../actions';
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
            width: 81,
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

const preMenuViewInnerElement = ({
                                     insertToAddButton,
                                     children,
                                     menuId,
                                     menuName,
                                     menuPrice,
                                     imageSrc,
                                     counter,
                                     dispatch,
                                     ...props
                                 }) => {
    return (
        <ZoomContext.Consumer>
            {
                ({zoom_level, zoom_scale}) => {
                    const size = getSize(zoom_level)
                    return (
                        <div className={cx('menu-view-element-outer-box')} {...props}
                             style={{width: size.width, height: size.height}}>
                            <div className={cx('inner-box')}>
                                <img alt="" className={cx('image')} src={imageSrc}/>
                                <div className={cx('name-label')}>
                                    {menuName} <i onClick={qmbtn} className="fas fa-question-circle" style={{fontSize:'125%',color: '#CB4335'}}></i>
                                </div>
                                <div className={cx('price-label')}>
                                    ₩{menuPrice}
                                </div>
                                <div className={cx('add-box')}>
                                    <button className={cx('add-button')}
                                            onClick={() => dispatch(add(menuId, menuPrice))}>
                                        Add
                                        {insertToAddButton}
                                    </button>
                                </div>
                            </div>
                            {children}
                        </div>)
                }}
        </ZoomContext.Consumer>

    )
};

const mapStateToProps = function (state) {
    return {
        message: 'This is message from mapStateToProps',
        counter: state.counters || {sum: 0, selectedMenus: []}
    }
}
const MenuViewInnerElement = connect(mapStateToProps)(preMenuViewInnerElement)

const MenuViewElement = ({children, insertToAddButton, menuId}) => {
    const menu = menuData.menus[menuId];
    return (
        <MenuViewInnerElement menuId={menuId} menuName={menu.menuName} menuPrice={menu.menuPrice}
                              imageSrc={menu.imgSrc} insertToAddButton={insertToAddButton}>
            {children}
        </MenuViewInnerElement>
    )
}


export default MenuViewElement
