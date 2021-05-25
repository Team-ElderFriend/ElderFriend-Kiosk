import React from 'react'
import classNames from 'classnames/bind'
import styles from "./SelectViewElement.scss"
import menuData from "../../data/MenuData"
import {qmbtn, clbtn} from '../PopupFunc';
import {connect} from 'react-redux';
import {add, reduce, remove} from '../../actions';

const cx = classNames.bind(styles);


const preSelectViewInnerElement = ({menuId, menuName, menuPrice, imageSrc, counter, dispatch, ...props}) => {
    return (
        <div className={cx('select-view-element-outer-box')} {...props}>
            <div className={cx('inner-box')}>
                <div className={cx('add-reduce-box')}>
                    <span className={cx('minus-box')}>
                   <i  className="fas fa-minus-circle"  onClick={()=>dispatch(reduce(menuId))}></i> 
                    </span>
                    {counter.selectedMenus.find(element => element.id === menuId).number}
                    
                    <span className={cx('plus-box')}>
                    <i  className="fas fa-plus-circle"  onClick={()=>dispatch(add(menuId, menuPrice))}></i>
                    </span>
                </div>
                <img alt="" className={cx('image')} src={imageSrc}/>
                <div className={cx('name-label')}>
                    {menuName}  <i onClick={qmbtn} className="far fa-question-circle"></i>
                </div>
                <div className={cx('price-label')}>
                    ₩{menuPrice}
                </div>
                <div className={cx('remove-box')}>
                    <button className={cx('remove-button')} onClick={()=> dispatch(remove(menuId))}>Remove</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const SelectViewInnerElement = connect(mapStateToProps)(preSelectViewInnerElement)


const SelectViewElement = ({menuId})=>{
    const menu = menuData.menus[menuId];
    return (
        <SelectViewInnerElement menuId={menuId} menuName={menu.menuName} menuPrice={menu.menuPrice} imageSrc={menu.imgSrc}/>
    )
}




export default SelectViewElement
