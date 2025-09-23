"use client";
import React, { useEffect, useState } from "react";
import DecryptedText from "../DecryptedText";
import { OrgChartComponent, OrgChartNode } from "../OrgChart";
import * as d3 from "d3";

const text =
  "We are a team of passionate technologists, strategists and creatives who believe in the power of technology to transform businesses and improve lives. We work closely with our clients to understand their unique challenges and opportunities, and we leverage our expertise in cloud, data and cyber technologies to deliver innovative solutions that drive real business outcomes.";

const WcuBody = () => {
  const [data, setData] = useState<OrgChartNode[] | null>(null);

  useEffect(() => {
    d3.json<OrgChartNode[]>("/org.json").then((data) => {
      if (data) setData(data);
    });
  }, []);




  return (
    <div className="w-full mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      {/* Left Side: Text */}
      <div className="flex-1 text-center md:text-left px-2 sm:px-4">
        <DecryptedText
          text={text}
          animateOn="view"
          revealDirection="center"
          className="text-base sm:text-lg leading-relaxed"
        />
      </div>

      <div className="flex-1 flex justify-center w-full">
        <div className="w-full max-w-md sm:max-w-lg">
          <OrgChartComponent data={data} />
        </div>
      </div>
    </div>
  );
};

export default WcuBody;
