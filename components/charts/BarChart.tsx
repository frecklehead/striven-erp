'use client';

import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export interface BarChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  layout?: 'horizontal' | 'vertical';
  stacked?: boolean;
  className?: string;
  height?: number;
}

const defaultColors = ['var(--primary)', 'var(--accent)', 'var(--success)', 'var(--warning)', 'var(--danger)'];

export function BarChart({ 
  data, 
  categories, 
  index, 
  colors = defaultColors, 
  valueFormatter,
  layout = 'horizontal',
  stacked = false,
  className, 
  height = 300 
}: BarChartProps) {
  return (
    <div className={className} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} layout={layout} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={layout === 'vertical'} horizontal={layout === 'horizontal'} stroke="var(--border)" />
          {layout === 'horizontal' ? (
            <>
              <XAxis dataKey={index} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} tickFormatter={valueFormatter} />
            </>
          ) : (
            <>
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} tickFormatter={valueFormatter} />
              <YAxis dataKey={index} type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} width={80} />
            </>
          )}
          <Tooltip 
            cursor={{ fill: 'var(--page-bg)' }}
            contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={valueFormatter}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          {categories.map((cat, i) => (
            <Bar
              key={cat}
              dataKey={cat}
              stackId={stacked ? "a" : undefined}
              fill={colors[i % colors.length]}
              radius={stacked ? 0 : [4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
