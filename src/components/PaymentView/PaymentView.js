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

const cx = classNames.bind(styles);


class prePaymentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={cx('payment-view')}>
            <FinalSelectListView />
                <div className={cx('total-price')}><p> Total Price:<br /> ₩{this.props.counter.sum}<br /><br /> </p></div>
                <NavLink to="/" style={{ textDecoration: 'none' ,color: 'black' }}>
                <div className={cx('cancel-button')}>Cancel</div>
                </NavLink>
                <div className={cx('confirm-button')}>Confirm</div>
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