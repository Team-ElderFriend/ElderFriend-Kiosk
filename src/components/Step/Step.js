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
            <div>
                <img className={cx('upOrDown')} alt='' src={up} />
                <div>'Step ' + {step} + ': ' + {message}</div>
            </div>
        )
    } 
    if (dir == 'down') {
        return (
            <div>
                <div>'Step ' + {step} + ': ' + {message}</div>
                <img className={cx('upOrDown')} alt='' src={down} />
            </div>
        )
    }
    if (dir == 'left') {
        return (
            <div>
                <img className={cx('leftOrRight')} alt='' src={left} />
                'Step ' + {step} + ': ' + {message}
            </div>
        )
    }
    if (dir == 'right') {
        return (
            <div>
                'Step ' + {step} + ': ' + {message}
                <img className={cx('leftOrRight')} alt='' src={right} />
            </div>
        )
    }
}

export default Step