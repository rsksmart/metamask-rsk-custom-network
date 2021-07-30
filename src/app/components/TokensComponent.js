import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TokensComponent extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col xs={1} className="bulletRight" >
            <span className="bullet4">4</span>
          </Col>
          <Col>
            <h2 className="step" >Add the RSK tokens! Click below to add the Mainnet RSK compatible tokens.</h2>
            <Row>
              <Col>
                <button className="buttonAddToken" >Add RIF Token</button>
              </Col>
              <Col>
                <button className="buttonAddToken" >Add DOC Token</button>
                <button className="buttonAddToken" >+ More Tokens</button>
              </Col>
              <Col>
                <button className="buttonAddToken" >Add BPRO Token</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TokensComponent
