
import React, { Component } from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default class Cardcomponent extends Component {
  render() {
    return (
      <>
        <MDBCard>
          <MDBCardImage src={this.props.img1} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>
              {/* Card title */}
              {this.props.title}
            </MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}
