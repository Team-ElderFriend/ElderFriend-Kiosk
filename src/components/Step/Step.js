import React from 'react'
import classNames from 'classnames/bind'
import styles from "./Step.scss"

import up from '../../images/directions/up.png'
import down from '../../images/directions/down.png'
import left from '../../images/directions/left.png'
import right from '../../images/directions/right.png'


const cx = classNames.bind(styles);

const Step = ({step, dir, message}) => {
    /*
    if (dir == 'up') {
        return (
            <div>
                <img className={cx('upOrDown')} alt='' src={up} />
                <br />
                <div className={cx('step-message')}>{'Step ' + step + ': ' + message}</div>
            </div>
        )
    } 
    if (dir == 'down') {
        return (
            <div>
                <div className={cx('step-message')}>{'Step ' + step + ': ' + message}</div>
                <br />
                <img className={cx('upOrDown')} alt='' src={down} />
            </div>
        )
    }
    */
    if (dir == 'down' || dir == 'left') {
        return (
            <div>
                &emsp;
                <div className={cx('step-message')}>{'Step ' + step + ': ' + message}</div>
            </div>
        )
    }
    if (dir == 'up' || dir == 'right') {
        return (
            <div>
                <div className={cx('step-message')}>{'Step ' + step + ': ' + message}</div>
                &emsp;
            </div>
        )
    } else if (step === '0') {
        return (
            <div>
                <div className={cx('step-message')}>{message}</div>
            </div>
        )
    }
}

export default Step