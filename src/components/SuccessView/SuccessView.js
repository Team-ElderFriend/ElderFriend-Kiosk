import React from 'react'
import classNames from 'classnames/bind'
import styles from "./SuccessView.scss"
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";

const cx = classNames.bind(styles);


class preSuccessView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={cx('success-view')}>
              <span className = {cx('correct')}>
                <br/>
              <i class="fas fa-check-circle"></i>
              </span>
              <div className = {cx('correct-text')}>
                
              Payment confirmed.
              <br/>
              Thank You for using our service.
              <br/>
              Total Price: ₩{this.props.counter.sum}
              
              </div>
              <NavLink to="/" style={{ textDecoration: 'none' ,color: 'black' }}>
                <div className={cx('return-button')}>Return</div>
              </NavLink>
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
  const SuccessView = connect(mapStateToProps)(preSuccessView)

export default SuccessView