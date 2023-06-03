'use client'
import Image from "next/image";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Tilt from 'react-parallax-tilt';
import {useState} from "react";


function AsiaPacific() {
  return (
    <>
      <aside className="bg-lime-100">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 cursor-pointer">
          <Card5   />
        </div>
        <div className="col-span-1 cursor-pointer">
          <Card5 />
        </div>
        <div className="col-span-1 cursor-pointer">
          <Card5 />
        </div>
      </div>
      </aside>
    </>
  );
}
export default AsiaPacific;


const TiltScale = () => {
    const [scale, setScale] = useState(1.15);

    return (
        <Tilt scale={scale} transitionSpeed={2500}>
            <div className="tilt-scale">
                <div className="header">
                    <div>Scale x{scale}</div>
                    <hr />
                </div>
                <div className="form">
                    <input
                        type="range"
                        min="0.7"
                        max="1.5"
                        step="0.01"
                        value={scale}
                        onChange={(ev) => setScale(parseFloat(ev.target.value))}
                    />
                </div>
            </div>
        </Tilt>
    );
};
const Card5 = () => (
    <Card css={{ w: "100%", h: "350px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={16} weight="bold" transform="uppercase" color="#9E9E9E">
            Headline
          </Text>
          <Text h2 color="white">
            Your checklist for better sleep
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
            src="https://nextui.org/images/card-example-5.jpeg"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  Breathing App
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Get a good night's sleep.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">

                <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                >
                  Get App
                </Text>

            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
);
