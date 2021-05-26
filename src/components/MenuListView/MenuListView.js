import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuListView.scss"
import MenuViewElement from "../MenuViewElement";
import ZoomContext from "../ZoomContext";

const cx = classNames.bind(styles);


const MenuListView = ({menuIds, ...props}) => {
    return (
        <ZoomContext.Consumer>
            {
                ({zoom_scale}) => {
                    return <div className={cx('menu-list-view')} {...props}>
                        <div className={cx('inner-box')}>
                            {
                                menuIds.map((menuId) => {
                                    return (
                                        <div className={cx('slot')}
                                             style={{margin: (12 * zoom_scale + 'px') + ' ' + (9 * zoom_scale + 'px'),}}>
                                            <MenuViewElement menuId={menuId}/>
                                        </div>
                                    )
                                })
                            }
                                </div>
                                </div>
                            }
                }
                </ZoomContext.Consumer>
                );
                }
                ;

                export default MenuListView
