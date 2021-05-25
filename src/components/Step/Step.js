import React from 'react'
import classNames from 'classnames/bind'
import styles from "./Step.scss"

import up from '../../images/directions/up.png'
import down from '../../images/directions/down.png'
import left from '../../images/directions/left.png'
import right from '../../images/directions/right.png'


const cx = classNames.bind(styles);

const Step = ({step, dir, message}) => {
    if (dir == 'up') {
        return (
            <div className={cx('step-message')}>
                <img className={cx('upOrDown')} alt='' src={up} />
                <br />
                <div>{'Step ' + step + ': ' + message}</div>
            </div>
        )
    } 
    if (dir == 'down') {
        return (
            <div className={cx('step-message')}>
                <div>{'Step ' + step + ': ' + message}</div>
                <br />
                <img className={cx('upOrDown')} alt='' src={down} />
            </div>
        )
    }
    if (dir == 'left') {
        return (
            <div className={cx('step-message')}>
                <img className={cx('leftOrRight')} alt='' src={left} />
                &emsp;
                &emsp;
                {'Step ' + step + ': ' + message}
            </div>
        )
    }
    if (dir == 'right') {
        return (
            <div className={cx('step-message')}>
                {'Step ' + step + ': ' + message}
                &emsp;
                &emsp;
                <img className={cx('leftOrRight')} alt='' src={right} />
            </div>
        )
    }
}

export default Step