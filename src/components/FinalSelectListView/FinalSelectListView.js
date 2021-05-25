import React from 'react'
import classNames from 'classnames/bind'
import styles from "./FinalSelectListView.scss"
import FinalSelectViewElement from "../FinalSelectViewElement";
import {connect} from 'react-redux';

const cx = classNames.bind(styles);


const preFinalSelectListView = ({counter,...props}) => {
    console.log(counter);
    return (
        <div className={cx('final-select-list-view')} {...props}>
            <div className={cx('final-select-header')}>
                Selected Menus
            </div>
            <div className={cx('inner-box')}>
                {
                    counter.selectedMenus.map((menu) => {
                        return (
                            <div className={cx('slot')}>
                                <FinalSelectViewElement menuId={menu.id}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
;

const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const FinalSelectListView = connect(mapStateToProps)(preFinalSelectListView)

export default FinalSelectListView
