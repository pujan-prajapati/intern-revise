import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CarouselComponent = () => {
  const ref = useRef();

  return (
    <>
      <section className="relative">
        <Carousel autoplay draggable fade ref={ref}>
          <div className="bg-gray-400 h-96 w-full"></div>
          <div className="bg-red-400 h-96 w-full"></div>
          <div className="bg-blue-400 h-96 w-full"></div>
          <div className="bg-purple-400 h-96 w-full"></div>
        </Carousel>
        <div className="">
          <Button
            onClick={() => ref.current.prev()}
            className="absolute top-1/2 left-5 rounded-full"
          >
            <LeftOutlined />
          </Button>
          <Button
            onClick={() => ref.current.next()}
            className="absolute top-1/2 right-5 rounded-full"
          >
            <RightOutlined />
          </Button>
        </div>
      </section>
    </>
  );
};

export default CarouselComponent;
