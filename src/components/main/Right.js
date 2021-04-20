import React from 'react'
import { Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default () => {

  const variant = {
    hidden: { x: 400, opacity: 0, scale: 0.2 },
    visible: { x: 0, opacity: 1, scale: 1 }
  }
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
          <InView threshold={0.15} triggerOnce={true}>
            {({ ref, inView }) => (
              <motion.div ref={ref} variants={variant} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 1 }} style={styles.tech} >
                <motion.img style={styles.techImg} width="100%" src="/assets/images/react.png" alt="mern stack" />
                <motion.img style={styles.techImg} width="100%" src="/assets/images/mongo.png" alt="mern stack" />
                <motion.img style={styles.techImg} width="100%" src="/assets/images/express.png" alt="mern stack" />
                <motion.img style={styles.techImg} width="100%" src="/assets/images/node.png" alt="mern stack" />
                <hr style={{ marginBottom: 50 }} />
              </motion.div>
            )}
          </InView>
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
    padding: window.innerWidth > 500 ? "50px 150px" : 0,
    position: "relative",
    left: 0
  },

  techImg: {
    marginBottom: 70
  }
}