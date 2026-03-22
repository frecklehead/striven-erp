import React from 'react';
import { cn } from '@/lib/utils/cn';
import { TextInput, TextInputProps } from './TextInput';

export interface DatePickerProps extends Omit<TextInputProps, 'type'> {}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    return (
      <TextInput 
        type="date" 
        ref={ref} 
        {...props} 
        className={cn("[&::-webkit-calendar-picker-indicator]:cursor-pointer", props.className)} 
      />
    );
  }
);
DatePicker.displayName = 'DatePicker';
