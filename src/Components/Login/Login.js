import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

    }
    handerChangeInput = (event) => {

    }
    componentWillMount() {
        document.title = "Đăng nhập hệ thống";
    }

    render() {
        return (
            <div className="form-login">
                <form className="form-horizontal" autoComplete="false" onSubmit={(e) => this.onSubmit(e)}>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <h2 style={{color: "red"}}>Đăng nhập hệ thống</h2><br/>
                            <p>
                                Chào mừng bạn đến với hệ thống chia sẻ kinh nghiệm phượt.
                            </p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="sr-only" htmlFor="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i
                                        className="fa fa-at"/></div>
                                    <input type="text" name="email" className="form-control" id="email" onChange={}
                                           placeholder="you@domain.com" required/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i
                                        className="fa fa-key"/></div>
                                    <input type="password" name="password" className="form-control" id="password"
                                           placeholder="Password" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: '1rem'}}>
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <center>
                                <button type="submit" className="btn btn-success" style={{marginRight: 10}}><i
                                    className="fa fa-sign-in"/> Đăng nhập
                                </button>
                                <Link to="/dang-ky" className="btn btn-primary"><i className="fa fa-user"></i> Đăng
                                    ký</Link>
                                <br/>
                                <Link className="btn btn-link" to="/password/reset">Bạn quên mật khẩu?</Link>
                            </center>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
