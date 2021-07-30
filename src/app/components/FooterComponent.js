import React from 'react'
import {
  Container, Image, Col, Row
} from 'react-bootstrap'
import logo from '../img/logo-footer.svg'

import { version } from '../../../package.json'

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg="3">
              <Image src={logo} alt="RSK Logo" />
            </Col>
            <Col lg="1">
              <h2>RIF</h2>
              <ul>
                <li>
                  <a href="https://developers.rsk.co/rif/" >services</a>
                </li>
                <li>
                  <a href="https://www.rifos.org/assets/whitepapers/rif-whitepaper-en.pdf" >
                    whitepaper
                  </a>
                </li>
                <li>
                  <a href="https://developers.rsk.co/rif/token/" >rifToken</a>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h2>Home</h2>
              <ul>
                <li>
                </li>
                <li>
                  <a href="https://www.rifos.org/directory#roadmap" >roadMap</a>
                </li>
                <li>
                  <a href="https://gitter.im/rsksmart/rif-name-service" >contact</a>
                </li>
              </ul>
            </Col>
            <Col lg="2">
              <h2>Developers</h2>
              <ul>
                <li><a href="https://developers.rsk.co/rif/rns" >docs</a></li>
                <li>
                  <a href="https://github.com/rnsdomains/" >Github</a>
                </li>
              </ul>
            </Col>
            <Col lg="2">
              <h2>Privacy</h2>
              <ul>
                <li>
                  <a href="https://www.rifos.org/privacy-policy" >privacy policy</a>
                </li>
                <li>
                  <a href="https://www.rifos.org/terms-conditions" >terms</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ fontSize: '.8em' }}>
                {`Copyright © ${new Date().getFullYear()} `}
                RSK Labs. All rights reserved.
                {` ${version}`}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default FooterComponent
