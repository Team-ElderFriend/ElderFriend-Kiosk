import React from 'react'
import classNames from 'classnames/bind'
import styles from "./HelpButton.scss"
import CategorySelectButton from "../CategorySelectButton";
import MenuListView from "../MenuListView";
import SelectListView from "../SelectListView";
import MenuData from "../../data/MenuData";
import Step from "../Step"

const cx = classNames.bind(styles);

const HelpButton = ({message}) => {
    return (
        <div className={cx('kiosk-button')}>{message}</div>
    )
}

export default HelpButton