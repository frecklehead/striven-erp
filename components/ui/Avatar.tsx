import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, initials, size = 'md', ...props }, ref) => {
    const [imgError, setImgError] = useState(false);

    const sizes = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] overflow-hidden font-medium",
          sizes[size],
          className
        )}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt="Avatar"
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span>{initials?.substring(0, 2).toUpperCase()}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';
