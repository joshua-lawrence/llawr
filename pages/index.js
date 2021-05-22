import Head from 'next/head'
import { Container,
Row,
Col,
Navbar,
Button } from "react-bootstrap"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Lawrence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid style={{backgroundColor: "#111"}}>
        <Row>
        <Col md="6" className="d-flex flex-column justify-content-center align-items-center">
                <div style={{color: "white"}}>
                    <h1 style={{fontSize: "64px"}}>Joshua Lawrence</h1>
                    <h3>Software Engineer</h3>
                    <h5>Java, JavaScript, Spring, React, Next.js, AWS</h5>
                    <div className="d-flex flex-row">
                      <h2><a href="https://github.com/joshua-lawrence"><AiFillGithub /></a></h2>
                      <h2><a href="https://www.linkedin.com/in/joshuaglawrence/"><AiFillLinkedin /></a></h2>
                    </div>
                </div>
            </Col>
          <Col>
            <img style={{width: "60%", paddingTop: "50px"}} src="me (1).png">
            </img>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{margin: "100px 0px 50px 0px"}}>
          <Col md="4">
              <a href="https://www.sadiephoto.com/" style={{width: "100% !important"}}>
                <img src="Capture.PNG" style={{ margin: "auto", width: "100%", border: "1px solid grey"}}>
                </img>
                <h5 className="text-center pt-3">Sadie Photo</h5>
              </a>
          </Col>
          <Col md="4">
              <a href="https://www.decheque.com/" style={{width: "100%"}}>
                <img src="Capture2.PNG" style={{margin: "auto",width: "100%", border: "1px solid grey"}}>
                </img>
                <h5 className="text-center pt-3">Decheque</h5>
              </a>
          </Col>
          <Col md="4">
              <a href="https://worldclassintegration.vercel.app/" style={{width: "100%"}}>
                <img src="Capture3.PNG" style={{ margin: "auto", width: "100%", border: "1px solid grey"}}>
                </img>
                <h5 className="text-center pt-3">World Class Integration</h5>
              </a>
          </Col>
        </Row>
        <Row style={{margin: "0px 0px 100px 0px"}}>
          <Col md="4">
                <a href="/algorithms" style={{width: "100%"}}>
                  <img src="Capture4.PNG" style={{ margin: "auto", width: "100%", border: "1px solid grey"}}>
                  </img>
                  <h5 className="text-center pt-3">Algos and DS Visualized</h5>
                </a>
            </Col>
        </Row>
      </Container>
    </>
  )
}
