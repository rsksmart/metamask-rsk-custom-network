import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ConnectionComponent extends React.Component {
  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet2">2</span>
          </Col>
          <Col>
            <h2 className="step" >Connect your Metamask wallet.</h2>
            <button className="button" >Connect Wallet</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ConnectionComponent
