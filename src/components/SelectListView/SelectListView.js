import React from 'react'
import classNames from 'classnames/bind'
import styles from "./SelectListView.scss"
import SelectViewElement from "../SelectViewElement";
import {connect} from 'react-redux';

const cx = classNames.bind(styles);


const preSelectListView = ({menuIds, counter,...props}) => {
    console.log(counter);
    return (
        <div className={cx('select-list-view')} {...props}>
            <div className={cx('select-header')}>
                Selected Menus
            </div>
            <div className={cx('inner-box')}>
                {
                    counter.selectedMenus.map((menu) => {
                        return (
                            <div className={cx('slot')}>
                                <SelectViewElement menuNumber={counter.selectedMenus.find(element => element.id === menu.id).number} menuId={menu.id}/>
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
  const SelectListView = connect(mapStateToProps)(preSelectListView)

export default SelectListView
