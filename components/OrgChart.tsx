"use client";
import React, { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

export const OrgChartComponent = ({ data }) => {
  const d3Container = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (data && d3Container.current) {
      if (!chartRef.current) {
        chartRef.current = new OrgChart();
      }

      // Get viewport width to scale nodes
      const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint

      chartRef.current
        .container(d3Container.current)
        .data(data)
        .nodeWidth(() => (isMobile ? 280 : 400)) // smaller node width on mobile
        .nodeHeight(() => (isMobile ? 220 : 300)) // smaller node height on mobile
        .childrenMargin(() => (isMobile ? 20 : 40))
        .compactMarginBetween(() => (isMobile ? 10 : 15))
        .compactMarginPair(() => (isMobile ? 30 : 50))
        .initialZoom(isMobile ? 0.5 : 0.7)
        .nodeContent((d, i, arr, state) => {
          return `
            <div style="padding-top:20px;background-color:none;margin-left:1px;height:${
              d.height
            }px;border-radius:16px;overflow:visible;">
              <a href="https://${
                d.data.linkedIn
              }" target="_blank" rel="noopener noreferrer">
                <div style="height:${
                  d.height - 20
                }px;background-color:white;border:1px solid lightgray;border-radius:16px;">
                  <img src="${d.data.imageUrl}" 
                       style="margin-top:-20px;margin-left:${
                         d.width / 2 - 50
                       }px;border-radius:100px;width:100px;height:100px;" />
                  <div style="margin-top:-20px;background-color:#003B5F;height:8px;width:${
                    d.width - 2
                  }px;border-radius:1px"></div>
                  <div style="padding:12px;text-align:center">
                    <div style="color:#003B5F;font-size:16px;font-weight:bold">${
                      d.data.name
                    }</div>
                    <div style="color:#555;font-size:14px;margin-top:4px">${
                      d.data.positionName
                    }</div>
                  </div>
                  <div style="padding:8px;text-align:center">
                    <div style="color:#003B5F;font-size:14px;font-weight:bold">Mobile Number</div>
                    <div style="color:#555;font-size:14px;margin-top:2px">${
                      d.data.phone
                    }</div>
                  </div>
                </div>
              </a>
            </div>`;
        })
        .render();

      // Keep zoom/pan enabled for touch devices
      const svg = d3.select(d3Container.current).select("svg");
      // Don't disable zoom here — allow pinch-to-zoom on mobile
    }
  }, [data]);

  return (
    <div className="overflow-x-auto w-full">
      {/* Add min-width so user can scroll horizontally on very small screens */}
      <div ref={d3Container} className="min-w-[300px]" />
    </div>
  );
};
