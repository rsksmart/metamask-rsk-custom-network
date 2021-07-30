import React from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import bitcoinHandImage from '../img/bitcoinHand.png'
import rskLogo from '../img/logoColor.svg'
import ConnectionComponent from './ConnectionComponent'
import DownloadComponent from './DownloadComponent'
import NetworkComponent from './NetworkComponent'
import TokensComponent from './TokensComponent'

class MainComponent extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Image className="rskLogo" src={rskLogo} />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&amp;family=Quicksand:wght@300;400;500;600;700&amp" rel="stylesheet"></link><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap" rel="stylesheet" />
            <header className="App-header">
                Connect Metamask to RSK
            </header>
            <br/>
            <p className="toolExplanation">Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.</p>

            <DownloadComponent/>
            <ConnectionComponent/>
            <NetworkComponent/>
            <TokensComponent/>
          </Col>
          <Col>
            <Image className="mainImage" src={bitcoinHandImage} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainComponent
