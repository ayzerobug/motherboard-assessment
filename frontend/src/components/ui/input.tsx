import * as React from "react"
import { Icon } from '@iconify/react';
import { cn } from "@/@utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string,
  iconPosition?: "left" | "right",
  onIconClick?: React.MouseEventHandler,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition = "right", onIconClick, ...props }, ref) => {
    return (

      <div className={cn(
        "flex  items-center w-full rounded-md px-3 py-1 border border-input bg-background text-sm focus-within:border-primary-300 ", className
      )}>
        {icon && iconPosition == "left" && < Icon onClick={onIconClick} icon={icon} className="text-gray-400" style={{ fontSize: '20px' }} />}
        <input
          type={type}
          className={cn(
            "bg-transparent w-full mx-1 h-10 rounded-md focus-visible:border-none focus-visible:outline-none placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition == "right" && <Icon onClick={onIconClick} icon={icon} className="text-gray-400" style={{ fontSize: '20px' }} />}
      </div>

    )
  }
)

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }
const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {

    const [icon, setIcon] = React.useState("humbleicons:eye");
    const [type, setType] = React.useState("password");

    const onToggleVisibility = () => {
      if (type === 'password') {
        setType("text");
        setIcon("fa-regular:eye-slash");
      } else {
        setType("password");
        setIcon("humbleicons:eye");
      }
    }

    return <Input type={type} ref={ref} {...props} icon={icon} onIconClick={onToggleVisibility} />
  }
)
PasswordInput.displayName = "PasswordInput"



export { Input, PasswordInput }
