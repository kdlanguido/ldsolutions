'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';

export const OrgChartComponent = (props) => {
    const d3Container = useRef(null);
    const chartRef = useRef(null);

    useLayoutEffect(() => {
        if (props.data && d3Container.current) {

            if (!chartRef.current) {
                chartRef.current = new OrgChart();
            }

            chartRef.current
                .container(d3Container.current)
                .data(props.data)
                .nodeWidth(() => 400)
                .nodeHeight(() => 300)
                .childrenMargin((d) => 40)
                .compactMarginBetween((d) => 15)
                .initialZoom(0.7)
                .compactMarginPair((d) => 50)
                .nodeContent(function (d, i, arr, state) {
                    return `
                        <div style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height}px;border-radius:20px;overflow:visible;">
                            <a href="https://${d.data.linkedIn}" target="_blank" rel="noopener noreferrer">
                                <div style="height:${d.height - 32}px;padding-top:0px;background-color:white;border:1px solid lightgray;border-radius:20px;">
                                    <img src=" ${d.data.imageUrl}" style="margin-top:-30px;margin-left:${d.width / 2 - 73}px;border-radius:100px;width:150px;height:150px;" />
                                    <div style="margin-top:-30px;background-color:#003B5F;height:10px;width:${d.width - 2}px;border-radius:1px"></div>
                                    <div style="padding:20px; padding-top:40px;text-align:center">
                                        <div style="color:#003B5F;font-size:18px;font-weight:bold"> ${d.data.name} </div>
                                        <div style="color:#555555;font-size:16px;margin-top:4px"> ${d.data.positionName} </div>
                                    </div> 
                                    <div style="padding:20px; padding-top:5px;text-align:center">
                                        <div style="color:#003B5F;font-size:16px;font-weight:bold">Mobile Number</div>
                                        <div style="color:#555555;font-size:16px;margin-top:4px"> ${d.data.phone}</div>
                                    </div> 
                                </div>    
                            </a> 
                        </div>`;
                })
                .render();

            const svg = d3.select(d3Container.current).select('svg');
            svg.on('.zoom', null);

        }
    }, [props.data]);

    return <div ref={d3Container} />;
};
