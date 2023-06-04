"use client";
import Image from "next/image";
import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import Tilt from "react-parallax-tilt";
import React, { Suspense, useState } from "react";

function AsiaPacific() {
  return (
    <>
      <aside>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1">
                <Tilt  scale={1.1} transitionSpeed={1200}>
        <ImageCard  backgroundImage={"/asia-pacific/fuji.jpg"} title={"Japan"} description={"Visit Japan, Yay Japan :D"} path={"/data"} />
                </Tilt>
                </div>
            <div className="col-span-1">
                <Tilt  scale={1.1} transitionSpeed={1200}>
                    <ImageCard  backgroundImage={"/asia-pacific/fuji.jpg"} title={"Japan"} description={"Visit Japan, Yay Japan :D"} path={"/data"} />
                </Tilt>
            </div>
            <div className="col-span-1">
                <Tilt  scale={1.1} transitionSpeed={1200}>
                    <ImageCard  backgroundImage={"/asiapacific.jpg"} title={"Japan"} description={"Visit Japan, Yay Japan :D"} path={"/data"} />
                </Tilt>
            </div>
          </div>
      </aside>
    </>
  );
}
export default AsiaPacific;

const ImageCard: React.FC<IMovieCard> = ({ backgroundImage, title, description , path}) => {
    return (
        <>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-700 ease-in-out">
            <div className="relative h-48">
                <Image
                    src={backgroundImage}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    quality={35}
                    alt="Hero Background"
                    className="hover:blur-sm transition duration-700 ease-in-out"
                    onClick={() => {
                        console.log("Image was pressed" + path)
                    }}
                />
            </div>
            <div className="p-6 ">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 bg-">{description}</p>
            </div>
        </div>
        </>
    );
};


/**
 * Represents a movie card.
 * @interface IMovieCard
 */
interface IMovieCard {
    /**
     * The URL of the background image for the movie card.
     * @type {string}
     */
    backgroundImage: string;

    /**
     * The title of the movie.
     * @type {string}
     */
    title: string;

    /**
     * The description of the movie.
     * @type {string}
     */
    description: string;

    /**
     * The path to the movie page.
     * @type {string}
     */
    path: string;
}


const Card5 = () => (
  <Card className="shadow-xl" css={{ w: "100%", h: "350px" }}>
    <Card.Header  css={{ position: "absolute", zIndex: 1, top: 5 }}>
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
        <Image
            src={"/../public/asia-pacific/fuji.jpg"}
            fill={true}
            style={{ objectFit: "cover" }}
            quality={35}
            alt="Hero Background"
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
            <Col span={1}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text h2 className="text-center" color="white">
               Info
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
