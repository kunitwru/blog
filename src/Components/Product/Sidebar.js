import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (
        <div>
            <h1 className="my-4">{this.props.children}</h1>
            <div>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
            </div>
        </div>
    )
  }
}
