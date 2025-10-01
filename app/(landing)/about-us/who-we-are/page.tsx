"use client";

import React, { useEffect, useState } from "react";
import { OrgChartComponent, OrgChartNode } from "@/components/OrgChart";
import * as d3 from "d3";

export default function Page() {
  const [data, setData] = useState<OrgChartNode[] | null>(null);

  useEffect(() => {
    d3.json<OrgChartNode[]>("/org.json").then((data) => {
      if (data) setData(data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center mt-20">
        <h1 className="text-5xl mx-auto">Who we are?</h1>
      </div>
      <OrgChartComponent data={data} />
    </div>
  );
}
