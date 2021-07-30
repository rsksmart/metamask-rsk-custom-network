import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class DownloadComponent extends React.Component {
  render () {
    return (
      <Container className="marginNextStep">
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet1">1</span>
          </Col>
          <Col>
            <h2 className="step" >Download and setup Metamask.</h2>
            <button className="button" >Download Metamask</button>
          </Col>
        </Row>
      </Container>)
  }
}

export default DownloadComponent
