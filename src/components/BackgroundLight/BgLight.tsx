import { FC, SVGProps } from 'react'

export const BgLight: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 852 582" className={className} {...props}>
      <defs>
        <linearGradient id="a" x1="50.009%" x2="55.007%" y1=".153%" y2="82.108%">
          <stop offset="0%" stopColor="#5C5C5C" stopOpacity="0" />
          <stop offset="100%" stopColor="#5C5C5C" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M1343 794 827 419l852-207z"
        transform="translate(-827 -212)"
      />
    </svg>
  )
}
