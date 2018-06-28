import React, { Component } from 'react'
import SliderTop from './SliderTop';
import ItemTravel from './ItemTravel';

export default class Travel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results : null
    }
  }

  componentDidMount() {
    fetch('https://www.meteoblue.com/en/server/search/query3?query=Hanoi')
    .then(respon => respon.json())
    .then(json => {
      this.setState({
        results : json.results
      })
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    const {results} = this.state
    return (
      <div>
          <div className="col-sm-12 row">
          <SliderTop />
            <div className="col-sm-9">
            <div className="row bg-white">
              {
                results ? (
                  results.map((res, key) => {
                    return <ItemTravel key={key} data={res}>{res.name}</ItemTravel>
                  })
                ) : ("<div>Loading ...</div>")
              }
              </div>
            </div>
            <div className="col-sm-3 no-padding-right" id="sidebar">
              <div className="bg-white widget">
                <h3>Tin tức mới</h3>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
