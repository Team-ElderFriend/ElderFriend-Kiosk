import React from 'react'
import classNames from 'classnames/bind'
import styles from "./MenuElement.scss"

const cx = classNames.bind(styles);


const MenuElement = ({menuName, menuPrice, imageSrc}) => {
    return (
        <div className={cx('outer-box')}>
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

export default MenuElement
