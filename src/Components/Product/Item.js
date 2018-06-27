import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Item extends Component {

    convert_name_to_slug = (str) => {
        str = str.toString().toLowerCase();     
     
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        str = str.replace(/(\s+)/g, '-');
     
        str = str.replace(/^-+/g, '');
     
        str = str.replace(/-+$/g, '');
  
        return str;
    }
    
  render() {
      
    return (
        <div className="col-sm-12 my-4 border item-pro">
                <h4 className="card-title-item">
                    <Link to={"/chi-tiet/"+ this.props.data.login +"/" + this.convert_name_to_slug(this.props.children) + ".html"}>{ this.props.children }</Link>
                </h4>
                <div className="row">
                    <div className="col-lg-4 left ">
                        <Link to={"/chi-tiet/"+ this.props.data.login +"/" + this.convert_name_to_slug(this.props.children) + ".html"} alt={this.props.children}>
                            <img className="card-img-top" src="http://placehold.it/350x350" alt={this.props.children}  />
                        </Link>
                    </div>
                    <div className="col-lg-8 right">
                        <small className="text-danger text-right-20">
                            <i class="fa fa-money"></i> 300.000 VND
                        </small>
                        <small className="text-primary text-right-20">
                            <i class="fa fa-map-marker"></i> Hà Nội
                        </small>
                        <small className="text-info text-right-10">
                            <i class="fa fa-user"></i> Phạm Sinh
                        </small>
                        <p className="card-text">
                            { this.props.data.body }
                        </p>
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                        <hr />
                        <small className="text-default text-right-20">
                            <i class="fa fa-eye"></i> 231
                        </small>
                        <small className="text-default">
                            <i class="fa fa-heart"></i> 100
                        </small>
                        <small className="text-default pull-right text-left-10">
                            <i class="fa fa-calendar"></i> 20-12-2018
                        </small>
                    </div>
                </div>
        </div>
    )
  }
}
