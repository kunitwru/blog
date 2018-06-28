import React, { Component } from 'react'

export default class SliderTop extends Component {
  render() {
    return (
        <div id="carouselExampleIndicators" className="carousel carousel-top-travel slide my-4" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350/ccc" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350/f0f" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350/000" alt="Third slide" />
                </div>
            </div>
        </div>
    )
  }
}
