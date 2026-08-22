
import * as React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
  size?: string
  nativeButton?: boolean
  render?: React.ReactElement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant,
      size,
      nativeButton,
      render,
      children,
      ...props
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`

    if (render) {
      return React.cloneElement(render, {
        className: `${render.props.className ?? ""} ${classes}`,
        children,
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
