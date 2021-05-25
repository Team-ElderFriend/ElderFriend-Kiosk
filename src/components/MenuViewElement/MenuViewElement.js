import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuViewElement.scss"
import menuData from "../../data/MenuData"
import {qmbtn, clbtn} from '../PopupFunc';
import {connect} from 'react-redux';
import {add} from '../../actions';

const cx = classNames.bind(styles);


const preMenuViewInnerElement = ({menuId, menuName, menuPrice, imageSrc, counter, dispatch,...props}) => {
    return (
        <div className={cx('menu-view-element-outer-box')} {...props}>
            <div className={cx('inner-box')}>
                <img alt="" className={cx('image')} src={imageSrc}/>
                <div className={cx('name-label')}>
                    {menuName}  <i onClick={qmbtn} className="far fa-question-circle"></i>
                </div>
                <div className={cx('price-label')}>
                    ₩{menuPrice}
                </div>
                <div className={cx('add-box')}>
                    <button className={cx('add-button')} onClick={()=> dispatch(add(menuId,menuPrice))}>Add</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const MenuViewInnerElement = connect(mapStateToProps)(preMenuViewInnerElement)

const MenuViewElement = ({menuId})=>{
    const menu = menuData.menus[menuId];
    return (
        <MenuViewInnerElement menuId={menuId} menuName={menu.menuName} menuPrice={menu.menuPrice} imageSrc={menu.imgSrc}/>
    )
}



export default MenuViewElement
