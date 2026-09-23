import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  /** Adds a small arrow icon after the label. */
  withArrow?: boolean
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }
type ButtonAsRouterLink = BaseProps & LinkProps & { href?: never }
type ButtonAsAnchor = BaseProps & { href: string; to?: never; target?: string; rel?: string; download?: boolean | string }

type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-surface hover:bg-brand',
  outline: 'bg-transparent text-ink border border-ink/20 hover:border-brand hover:text-brand',
  ghost: 'bg-transparent text-ink hover:text-brand',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = 'primary', size = 'md', children, className, withArrow, ...props }, ref) {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-medium',
      'transition-colors duration-300 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    const arrow = withArrow ? (
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : null

    if ('to' in props && props.to) {
      const { to, ...rest } = props as ButtonAsRouterLink
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={cn(classes, 'group')} {...rest}>
          {children}
          {arrow}
        </Link>
      )
    }

    if ('href' in props && props.href) {
      const { href, ...rest } = props as ButtonAsAnchor
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cn(classes, 'group')} {...rest}>
          {children}
          {arrow}
        </a>
      )
    }

    const buttonProps = props as ButtonAsButton
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cn(classes, 'group')} {...buttonProps}>
        {children}
        {arrow}
      </button>
    )
  }
)
