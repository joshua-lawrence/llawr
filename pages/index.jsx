import { Container, Grid, Text } from "@nextui-org/react";
import Head from "next/head";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Lawrence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-shadow" style={{}}>
        <div style={{ backgroundColor: "black", borderRadius: "40px" }}>
          <Container lg responsive={false}>
            <Grid.Container>
              <Grid
                md="8"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="body-card" style={{ padding: 36 }}>
                  <Text
                    h1
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 70%",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Joshua Lawrence
                  </Text>
                  <Text
                    h3
                    color="white"
                    size={28}
                    weight={300}
                    css={{ marginTop: 0, marginBottom: 8, padding: 0 }}
                  >
                    CTO at Velvet
                  </Text>
                  <Text
                    h4
                    color="white"
                    weight="thin"
                    css={{ marginBottom: 8 }}
                  >
                    Engineering · DevOps · AI · Data Driven Decision Making
                  </Text>
                  <Grid.Container>
                    <Grid>
                      <a href="https://github.com/joshua-lawrence">
                        <AiFillGithub fontSize={36} />
                      </a>
                    </Grid>
                    <Grid>
                      <a href="https://www.linkedin.com/in/joshuaglawrence/">
                        <AiFillLinkedin fontSize={36} />
                      </a>
                    </Grid>
                  </Grid.Container>
                </div>
              </Grid>
              <Grid md="4">
                <img
                  className="me"
                  style={{
                    width: "70%",
                    paddingTop: "50px",
                    marginLeft: "100px",
                  }}
                  src="me (1).png"
                ></img>
              </Grid>
            </Grid.Container>
          </Container>
        </div>
      </div>
    </>
  );
}
