"use client";

import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { skillRadar } from "@/data/portfolio";

export function SkillsRadarChart() {
  const indicators = skillRadar.indicators.map(({ name }) => ({ name }));

  const option: EChartsOption = {
    animationDuration: 900,
    tooltip: {
      backgroundColor: "rgba(2, 6, 23, 0.92)",
      borderColor: "rgba(34, 211, 238, 0.2)",
      textStyle: {
        color: "#e2e8f0",
      },
    },
    radar: {
      center: ["50%", "52%"],
      radius: "70%",
      indicator: indicators,
      splitNumber: 4,
      axisName: {
        color: "#cbd5e1",
        fontSize: 12,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(148, 163, 184, 0.16)",
        },
      },
      splitArea: {
        areaStyle: {
          color: [
            "rgba(15, 23, 42, 0.25)",
            "rgba(15, 23, 42, 0.18)",
            "rgba(15, 23, 42, 0.12)",
            "rgba(15, 23, 42, 0.08)",
          ],
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(148, 163, 184, 0.2)",
        },
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: skillRadar.values,
            areaStyle: {
              color: "rgba(34, 211, 238, 0.18)",
            },
            lineStyle: {
              color: "#22d3ee",
              width: 2,
            },
            itemStyle: {
              color: "#8b5cf6",
            },
            symbol: "circle",
            symbolSize: 8,
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      opts={{ renderer: "svg" }}
      style={{ height: "100%", minHeight: "280px", width: "100%" }}
    />
  );
}
