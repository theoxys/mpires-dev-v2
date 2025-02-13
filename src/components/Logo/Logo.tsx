import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <svg
      className={className}
      viewBox="0 0 86 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.1587 31.1693L37.177 39.1877C42.0566 44.0672 49.9679 44.0672 54.8474 39.1877C56.4567 37.5784 57.5353 35.6394 58.083 33.5881L63.6826 39.1877C68.5622 44.0672 76.4735 44.0672 81.353 39.1877C86.2326 34.3081 86.2326 26.3968 81.353 21.5173L63.6826 3.84691C58.8031 -1.03263 50.8918 -1.03263 46.0122 3.84691C44.403 5.45619 43.3244 7.39522 42.7766 9.4465L37.177 3.84692C32.2975 -1.03263 24.3862 -1.03263 19.5066 3.84692L4.96539 18.3882C-0.625752 23.9793 -0.625751 33.0444 4.96539 38.6355C10.5565 44.2267 19.6216 44.2266 25.2127 38.6355C27.3293 36.519 28.6446 33.9046 29.1587 31.1693ZM32.7594 8.26451C30.3197 5.82474 26.364 5.82475 23.9242 8.26452C21.4855 10.7032 21.4845 14.6566 23.9211 17.0966L41.5946 34.7701C44.0344 37.2099 47.9901 37.2099 50.4298 34.7701C52.8683 32.3316 52.8696 28.3789 50.4337 25.9388L32.7594 8.26451ZM20.7951 22.8058L15.0891 17.0997L9.38299 22.8058C6.23162 25.9572 6.23162 31.0665 9.38299 34.2179C12.5344 37.3693 17.6437 37.3693 20.7951 34.2179C23.9465 31.0665 23.9465 25.9571 20.7951 22.8058ZM50.4247 17.0945C47.9901 14.6543 47.9918 10.7026 50.4298 8.26451C52.8696 5.82474 56.8253 5.82474 59.265 8.26451L76.9354 25.9349C79.3752 28.3747 79.3752 32.3303 76.9354 34.7701C74.4957 37.2099 70.54 37.2099 68.1002 34.7701L50.4247 17.0945Z"
        fill="var(--color-neutral)"
      />
    </svg>
  )
}
