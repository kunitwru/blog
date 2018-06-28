import React, { Component } from 'react'
import {Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-green fixed-top">
            <div className="container">
            <Link className="navbar-brand nav-home-link" to="/"><i className="fa fa-hashtag"></i>sPhượt </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink activeClassName="active" className="nav-link" to="/dia-diem">
                            <i className="fa fa-rss-square"></i> Phượt point
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink activeClassName="active" className="nav-link" to="/shop">
                            <i className="fa fa-shopping-cart"></i> Đồ phượt
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/phuot">
                            <i className="fa fa-send"></i> Gửi bài
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/login">
                            <i className="fa fa-sign-in"></i> Đăng nhập
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <Link to="/facebook" className="nav-link text-mute pull-left"><i className="fa fa-facebook"></i></Link>
                        <Link to="/youtube" className="nav-link text-mute pull-left"><i className="fa fa-youtube"></i></Link>
                        <Link to="/twiiter" className="nav-link text-mute pull-left"><i className="fa fa-twitter"></i></Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
  }
}
