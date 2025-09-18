'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';

export interface OrgChartNode {
    id: string | number;
    name: string;
    positionName: string;
    linkedIn: string;
    imageUrl: string;
    phone: string;
    children?: OrgChartNode[];
}

export interface OrgChartComponentProps {
    data: OrgChartNode[] | null;
}

interface OrgChartRenderedNode extends d3.HierarchyNode<OrgChartNode> {
    width: number;
    height: number;
}

export const OrgChartComponent: React.FC<OrgChartComponentProps> = ({ data }) => {
    const d3Container = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<OrgChart<OrgChartNode> | null>(null);



    useLayoutEffect(() => {
        if (data && d3Container.current) {
            if (!chartRef.current) {
                chartRef.current = new OrgChart<OrgChartNode>();
            }

            chartRef.current
                .container(d3Container.current)
                .data(data)
                .nodeWidth(() => 400)
                .nodeHeight(() => 300)
                .childrenMargin(() => 40)
                .compactMarginBetween(() => 15)
                .initialZoom(0.7)
                .compactMarginPair(() => 50)
                .nodeContent((d) => {
                    const node = d as OrgChartRenderedNode;

                    return `
    <div style="padding-top:30px;background-color:none;margin-left:1px;height:${node.height}px;border-radius:20px;overflow:visible;">
      <a href="https://${node.data.linkedIn}" target="_blank" rel="noopener noreferrer">
        <div style="height:${node.height - 32}px;padding-top:0px;background-color:white;border:1px solid lightgray;border-radius:20px;">
          <img src="${node.data.imageUrl}" style="margin-top:-30px;margin-left:${node.width / 2 - 73}px;border-radius:100px;width:150px;height:150px;" />
          <div style="margin-top:-30px;background-color:#003B5F;height:10px;width:${node.width - 2}px;border-radius:1px"></div>
          <div style="padding:20px; padding-top:40px;text-align:center">
            <div style="color:#003B5F;font-size:18px;font-weight:bold">${node.data.name}</div>
            <div style="color:#555555;font-size:16px;margin-top:4px">${node.data.positionName}</div>
          </div> 
          <div style="padding:20px; padding-top:5px;text-align:center">
            <div style="color:#003B5F;font-size:16px;font-weight:bold">Mobile Number</div>
            <div style="color:#555555;font-size:16px;margin-top:4px">${node.data.phone}</div>
          </div> 
        </div>    
      </a> 
    </div>`;
                })
                .render();

            const svg = d3.select(d3Container.current).select<SVGSVGElement>('svg');
            svg.on('.zoom', null);
        }
    }, [data]);

    return <div ref={d3Container} />;
};
