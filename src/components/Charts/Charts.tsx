"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as RechartsPrimitive from "recharts";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Chart related components and types
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const data = [
  {
    date: "Nov 01, 2023",
    "Alpha Corp": 2000.87,
  },
  {
    date: "Nov 01, 2023",
    "Alpha Corp": 3400.87,
  },
  {
    date: "Nov 03, 2023",
    "Alpha Corp": 4500.43,
  },
  {
    date: "Nov 04, 2023",
    "Alpha Corp": 4000.28,
  },
  {
    date: "Nov 05, 2023",
    "Alpha Corp": 3100,
  },
  {
    date: "Nov 06, 2023",
    "Alpha Corp": 4500,
  },
  {
    date: "Nov 07, 2023",
    "Alpha Corp": 3100,
  },
  {
    date: "Nov 08, 2023",
    "Alpha Corp": 7000,
  },
  {
    date: "Nov 09, 2023",
    "Alpha Corp": 9000.56,
  },
];

export default function Stats10() {
  // const sanitizedName = sanitizeName(item.name);
  const gradientId = `gradient-blue`;
  const color = "rgba(9 85 253 / 1)";

  return (
    <div className="flex items-center justify-center w-full">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="mt-2 overflow-hidden">
          <ChartContainer
            className="w-full h-full"
            config={{
              ["Alpha Corp"]: {
                label: "Alpha Corp",
                color: color,
              },
            }}
          >
            <RechartsPrimitive.AreaChart data={data}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(21 93 252 / 0.6)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="rgba(21 93 252 / 0.2)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <RechartsPrimitive.XAxis dataKey="date" hide={true} />
              <RechartsPrimitive.Area
                dataKey={"Alpha Corp"}
                stroke={color}
                fill={`url(#${gradientId})`}
                fillOpacity={1}
                strokeWidth={2}
                type="monotone"
              />
            </RechartsPrimitive.AreaChart>
          </ChartContainer>
        </div>
      </dl>
    </div>
  );
}
