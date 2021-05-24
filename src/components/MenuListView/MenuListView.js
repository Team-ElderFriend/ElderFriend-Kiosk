import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuListView.scss"
import MenuViewElement from "../MenuViewElement";

const cx = classNames.bind(styles);


const MenuListView = ({menuIds, ...props}) => {
    return (
        <div className={cx('menu-list-view')} {...props}>
            <div className={cx('inner-box')}>
                {
                    menuIds.map((menuId) => {
                        return (
                            <div className={cx('slot')}>
                                <MenuViewElement menuId={menuId}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
;

export default MenuListView
