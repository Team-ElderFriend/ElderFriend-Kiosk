import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuViewElement.scss"
import menuData from "../../data/MenuData"

const cx = classNames.bind(styles);


const MenuViewInnerElement = ({menuName, menuPrice, imageSrc, ...props}) => {
    return (
        <div className={cx('menu-view-element-outer-box')} {...props}>
            <div className={cx('inner-box')}>
                <img alt="" className={cx('image')} src={imageSrc}/>
                <div className={cx('name-label')}>
                    {menuName}
                </div>
                <div className={cx('price-label')}>
                    ₩{menuPrice}
                </div>
            </div>
        </div>
    )
};

const MenuViewElement = ({menuId})=>{
    const menu = menuData.menus[menuId];
    return (
        <MenuViewInnerElement menuName={menu.menuName} menuPrice={menu.menuPrice} imageSrc={menu.imgSrc}/>
    )
}
export default MenuViewElement
