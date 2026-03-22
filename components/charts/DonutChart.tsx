'use client';

import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export interface DonutChartProps {
  data: any[];
  category: string;
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
  height?: number;
}

const defaultColors = ['var(--primary)', 'var(--accent)', 'var(--success)', 'var(--warning)', 'var(--danger)', '#8b5cf6'];

export function DonutChart({ 
  data, 
  category, 
  index, 
  colors = defaultColors, 
  valueFormatter,
  className, 
  height = 300 
}: DonutChartProps) {
  return (
    <div className={className} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            nameKey={index}
            dataKey={category}
            stroke="var(--card-bg)"
            strokeWidth={2}
          >
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={valueFormatter}
          />
          <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
