import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Lawrence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid style={{ backgroundColor: "#111" }}>
        <Container style={{ backgroundColor: "#111" }}>
          <Row>
            <Col
              md="7"
              className="heading d-flex flex-column justify-content-center align-items-center"
            >
              <div style={{ color: "white" }}>
                <h1 className="gradient-h1">Joshua Lawrence</h1>
                <h3 style={{ fontWeight: 300, fontSize: "28px" }}>
                  CTO at Velvet
                </h3>
                <h5 style={{ fontWeight: 100 }}>
                  Product Design · Engineering · Data Driven Decision Making
                </h5>
                <div className="d-flex flex-row">
                  <h2>
                    <a href="https://github.com/joshua-lawrence">
                      <AiFillGithub />
                    </a>
                  </h2>
                  <h2>
                    <a href="https://www.linkedin.com/in/joshuaglawrence/">
                      <AiFillLinkedin />
                    </a>
                  </h2>
                </div>
              </div>
            </Col>
            <Col>
              <img
                className="me"
                style={{
                  width: "70%",
                  paddingTop: "50px",
                  marginLeft: "100px",
                }}
                src="me (1).png"
              ></img>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row style={{ margin: "100px 0px 50px 0px" }}>
          <Col md="4">
            <a
              href="https://www.sadiephoto.com/"
              style={{ width: "100% !important" }}
              className="float-card"
            >
              <img
                src="Capture.PNG"
                style={{
                  margin: "auto",
                  width: "100%",
                  boxShadow: "20px 20px 50px #bebebe, -20px -20px 50px #ffffff",
                  borderRadius: "15px",
                }}
              ></img>
              <h5 className="text-center pt-3 gradient">Sadie Photo</h5>
            </a>
          </Col>
          <Col md="4">
            <a
              href="https://www.velvetfs.com/"
              style={{ width: "100%" }}
              className="float-card"
            >
              <img
                src="velvet.PNG"
                style={{
                  margin: "auto",
                  width: "100%",
                  boxShadow: "20px 20px 50px #bebebe, -20px -20px 50px #ffffff",
                  borderRadius: "15px",
                }}
              ></img>
              <h5 className="text-center pt-3 gradient">Velvet</h5>
            </a>
          </Col>
          <Col md="4">
            <a
              href="https://worldclassintegration.vercel.app/"
              style={{ width: "100%" }}
              className="float-card"
            >
              <img
                src="Capture3.PNG"
                style={{
                  margin: "auto",
                  width: "100%",
                  boxShadow: "20px 20px 50px #bebebe, -20px -20px 50px #ffffff",
                  borderRadius: "15px",
                }}
              ></img>
              <h5 className="text-center pt-3 gradient">
                World Class Integration
              </h5>
            </a>
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 100px 0px" }}>
          <Col md="4">
            <a
              href="/algorithms"
              style={{ width: "100%" }}
              className="float-card"
            >
              <img
                src="Capture4.PNG"
                style={{
                  margin: "auto",
                  width: "100%",
                  boxShadow: "20px 20px 50px #bebebe, -20px -20px 50px #ffffff",
                  borderRadius: "15px",
                }}
              ></img>
              <h5 className="text-center pt-3 gradient">
                Data Structures and Algorithms Visualized
              </h5>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
