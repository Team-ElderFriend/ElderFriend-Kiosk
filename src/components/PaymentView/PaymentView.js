import React from 'react'
import classNames from 'classnames/bind'
import styles from "./PaymentView.scss"
import {connect} from 'react-redux';
import FinalSelectListView from "../FinalSelectListView";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";
import up from '../../images/directions/up.png';
import Step from "../Step";

const cx = classNames.bind(styles);


class prePaymentView extends React.Component {
    constructor(dispatch, ...props) {
        super(props);
        this.state = {
        };




        this.hands = [
          '',
          <img className={cx('step-1', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-2', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-3', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-4', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-5', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-6', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-7', 'hand')} src={up} alt={''}/>,
          <img className={cx('step-8', 'hand')} src={up} alt={''}/>,
      ]
    }
    

    render() {
        return (
            <div className={cx('payment-view')}>
            <FinalSelectListView />
                <div className={cx('total-price')}><p> Total Price:<br /> ₩{this.props.counter.sum} </p></div>
                <div className={cx('button-box')}>
                <NavLink to="/" style={{ textDecoration: 'none' ,color: 'black' }}>
                <div className={cx('cancel-button')}>Cancel</div>
                </NavLink>
                <NavLink to="/components/SuccessView" style={{ textDecoration: 'none' ,color: 'black' }}>
                <div className={cx('confirm-button')}>
                  Confirm
                  {(this.props.counter.guide)&&
                  <img className={cx('step-8','hand')} src={up} alt={''}/>
                  }
                </div>
                </NavLink>
                </div>
                {(this.props.counter.guide)&&
                <div><Step step={'8'} dir={'up'} message={'Press "Cancel" or "Confirm" depending on your decision.'}/></div>
                }
                { (this.props.counter.sum==0)&&
                <Redirect to ="/"/>
                }
            </div>
            
        );
    }
}


const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || {sum:0, selectedMenus:[]}
    }
  }
  const PaymentView = connect(mapStateToProps)(prePaymentView)

export default PaymentView