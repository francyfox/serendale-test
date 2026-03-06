import { cn } from '@/lib/utils'
import Link from 'next/link';
import styles from './AppButton.module.css'

interface Props {
  href?: string
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export function AppButton({ href, children, className, variant = 'secondary' }: Props) {
  const Tag = href ? Link : 'button';

  return (
    <Tag
      href={href as string}
      className={cn(
        "px-[12px] md:px-[32px] h-[40px] md:h-[70px] flex justify-center items-center text-white text-xl font-normal font-space rounded-[100px] transition-opacity duration-200 hover:opacity-75",
        styles[variant],
        className
      )}
    >
      <span>{children}</span>
    </Tag>
  );
}