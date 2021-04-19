import React from 'react'
import { Row, Col } from 'reactstrap'

export default () => {
  return (
    <div style={styles.rightAside} className="container">
      <Row >
        <Col>
          <div>
            <h1 style={styles.stackHeading}>The <span style={{ color: "#053754" }}>Stack</span></h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col >
          <hr style={{ marginTop: 70 }} />
          <div style={styles.tech}>
            <img style={styles.techImg} width="100%" src="/assets/images/react.png" alt="mern stack" />
            <img style={styles.techImg} width="100%" src="/assets/images/mongo.png" alt="mern stack" />
            <img style={styles.techImg} width="100%" src="/assets/images/express.png" alt="mern stack" />
            <img style={styles.techImg} width="100%" src="/assets/images/node.png" alt="mern stack" />
            <hr style={{ marginBottom: 50 }} />
            {/* <img style={styles.techImg} width="100%" src="/assets/images/five.svg" alt="mern stack" /> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const styles = {
  rightAside: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 50
  },

  stackHeading: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: 900,
    position: "relative",
    left: 0,
    top: 50,
    color: "#2a2b2a"
  },

  tech: {
    padding: "50px 150px",
    position: "relative",
    left: 0
  },

  techImg: {
    marginBottom: 70
  }
}