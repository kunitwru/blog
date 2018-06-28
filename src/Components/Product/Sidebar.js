import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div>
            <h1 className="my-4">{this.props.children}</h1>
            <div>
                
                <form>
                    <div className="input-group mb-3 input-group-sm">
                        <input type="text" name="keyword" className="form-control" placeholder="Từ khóa"/>
                    </div>
                    <div className="input-group mb-3 input-group-sm">
                        <label htmlFor="customRange">Giá</label>
                        <input type="range" defaultValue="10" name="price" className="custom-range" min="0" max="100" id="price" />
                    </div>

                    <div className="input-group mb-3 input-group-sm">
                        <select className="form-control" name="location" id="location">
                            <option value>Địa chỉ</option>
                            <option value>1</option>
                            <option value>2</option>
                        </select>
                    </div>
                    <div className="input-group mb-3 input-group-sm">
                        <select className="form-control" name="category" id="category">
                            <option value>Danh mục</option>
                            <option value>1</option>
                            <option value>2</option>
                        </select>
                    </div>
                    
                    <p className="text-center">
                        <button className="btn btn-danger" type="submit"><i className="fa fa-search"></i></button>
                    </p>
                    </form>

            </div>
        </div>
    )
  }
}
