import { cn } from '@/lib/utils'
import Link from 'next/link';

interface Props {
  href?: string
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

const variantStyles: Record<NonNullable<Props['variant']>, React.CSSProperties> = {
  primary: {
    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%) border-box',
    border: '2px solid transparent',
  },
  secondary: {
    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(#fff, #fff) border-box',
    border: '2px solid transparent',
  },
}

export function AppButton({ href, children, className, variant = 'secondary' }: Props) {
  const Tag = href ? Link : 'button';

  return (
    <Tag
      href={href as string}
      className={cn("px-[32px] h-[70px] flex justify-center items-center text-white text-xl font-normal font-space rounded-[100px] transition-opacity duration-200 hover:opacity-75", className)}
      style={variantStyles[variant]}
    >
      <span>{children}</span>
    </Tag>
  );
}