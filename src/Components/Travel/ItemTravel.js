import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ItemTravel extends Component {
  render() {
    return (
      <div className="col-sm-4 my-4">
        <div className="border">
          <div className="item-header">
            <Link to="/" className="image-hover">
              <figure>
                <img src="http://placehold.it/265x180" className="img-fluid" alt={this.props.children} />
              </figure>
            </Link>
          </div>
          <div className="item-content padding-all-10">
            <div className="content-category"> 
                <Link to="/category/" className="text-info category-text">{this.props.data.country}</Link>
            </div>
            <h3 className="entry-title">
              <a href="/">{this.props.children}</a>
            </h3>
            <p>
            Cùng Phượt – Thanh Hóa là tỉnh cực Bắc miền Trung (Bắc Trung Bộ) và là một tỉnh lớn về cả
            </p>
          </div>
        </div>
      </div>
    )
  }
}
