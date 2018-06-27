import React, { Component } from 'react'
import Item from './Item'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar';

export default class Product extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users : null
        }
    }
    format_currency = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users : json
                })
            }).catch((e) => {
                console.log(e);
            })
        
    }

  render() {
     const {users} = this.state
    return (
        <div className="row bg-white">
            <div className="row col-sm-12">
                <div className="col-sm-9 my-4">
                    <div className="section_title">
                        <h2>
                            <Link className="nav-link" to="/shop">
                                Đồ phượt
                            </Link>
                        </h2>
                    </div>
                    { users ? (
                        users.map(user => (
                            <Item data= {user} key={user.id} >
                                {user.title || '[No account]'}
                            </Item>
                        ))
                    ) : (
                            <div>Loading </div>
                        )
                    }
                </div>
                {/* /.col-lg-9 */}
                <div className="col-sm-3 my-4">
                    <Sidebar>Bộ lọc</Sidebar>
                </div>
            </div>
        </div>
      
    )
  }
}
