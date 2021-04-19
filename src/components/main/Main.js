import React from 'react'
import { Row, Col } from 'reactstrap'
import Right from './Right'
import resume from '../../pdf/resume.pdf'

export default () => {
  return (
    <div className="container-fluid">
      <aside className="container" style={styles.container}>
        {/* LEFT ASIDE */}
        <Row>
          <Col style={styles.leftAside} md={5} lg={5}>
            {/* image */}
            <Row>
              <Col>
                <div style={{ width: "100%", paddingRight: 100 }}>
                  <img style={styles.image} width="100%" src="/assets/images/self.svg" />
                </div>
              </Col>
            </Row>
            {/* Name heading */}
            <Row>
              <Col>
                <div style={styles.textContainer}>
                  <h1 style={styles.name}>Hi, I am <br />Jose Elmer.</h1>
                  <p style={styles.tagline}>
                    I am a full-stack developer and web designer focused <br /> on UI/UX.
                  </p>
                </div>
              </Col>
            </Row>
            {/* Get in touch */}
            <Row>
              <Col>
                <div style={styles.textContainer}>
                  <h1 style={styles.contact}>Get in touch</h1>
                  <p style={styles.contactInfo}>
                    <span className="fa fa-phone mr-3"></span> +63 907 047 6279
                  </p>
                  <p style={styles.contactInfo}>
                    <span className="fa fa-envelope mr-3"></span> macszoner94@gmail.com
                  </p>
                  <h1 style={styles.contact}>Links</h1>
                  <p style={styles.socialMedia}>
                    <a style={{ color: "#fff" }} href="https://www.facebook.com/joseelmer.macalla.5/" target="_blank"><span className="fa fa-facebook-square mr-2"></span></a>
                    <a style={{ color: "#fff" }} href="https://www.linkedin.com/in/jose-elmer-macalla-3743791ba/" target="_blank"> <span className="fa fa-linkedin-square"></span></a>
                  </p>
                  <p style={styles.resume} >
                    <span>
                      <img style={styles.techImg} width="20%" src="/assets/images/five.svg" alt="mern stack" />
                      <a style={{ color: "#fff" }} target="_blank" href={resume} >Download CV.</a>
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          {/* RIGHT ASIDE */}
          <Col>
            <Right />
          </Col>
        </Row>
      </aside>
    </div>
  )
}

const styles = {
  container: {
    padding: 0
  },

  // LEFTASIDE

  leftAside: {
    height: "100%",
    backgroundColor: "#000",
    padding: 30
  },

  image: {
    position: "relative",
    left: 60,
    top: 50
  },

  name: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 48,
    marginLeft: 60,
    marginTop: 100
  },

  tagline: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 60,
  },

  contact: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 32,
    marginLeft: 60,
    marginTop: 50
  },

  contactInfo: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 60,
    marginBottom: 0
  },

  socialMedia: {
    fontSize: 32,
    color: "#fff",
    marginLeft: 60,
    marginBottom: 20
  },

  resume: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 60,
    marginBottom: 0,
    marginTop:40
  },

  techImg: {
    marginTop: 10,
    marginRight:10
  }
}