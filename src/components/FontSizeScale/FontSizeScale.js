import React from 'react'
import classNames from 'classnames/bind'
import styles from "./FontSizeScale.scss"

const cx = classNames.bind(styles);


const FontSizeScale = ({scale, children}) => {
    return (
        <div className={'font-size-scale'} style={{fontSize: scale*100 + '%'}}>
            {children}
        </div>
    );
};

export default FontSizeScale
