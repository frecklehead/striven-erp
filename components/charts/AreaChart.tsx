'use client';

import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export interface AreaChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
  height?: number;
}

const defaultColors = ['var(--primary)', 'var(--accent)', 'var(--success)', 'var(--warning)'];

export function AreaChart({ data, categories, index, colors = defaultColors, valueFormatter, className, height = 300 }: AreaChartProps) {
  return (
    <div className={className} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            {categories.map((cat, i) => (
              <linearGradient key={cat} id={`color-${cat}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0}/>
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis 
            dataKey={index} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: 'var(--text-muted)' }} 
            dy={10} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: 'var(--text-muted)' }}
            tickFormatter={valueFormatter}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={valueFormatter}
          />
          {categories.map((cat, i) => (
            <Area
              key={cat}
              type="monotone"
              dataKey={cat}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#color-${cat})`}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
