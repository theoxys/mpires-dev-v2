'use client'

import { useEffect } from 'react'

export const GithubStarButton = () => {
  useEffect(() => {
    // Carrega o script do GitHub buttons
    const script = document.createElement('script')
    script.src = 'https://buttons.github.io/buttons.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Limpa o script quando o componente for desmontado
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="github-btn-container">
      <a
        className="github-button"
        href="https://github.com/theoxys/mpires-dev-v2"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star theoxys/mpires-dev-v2 on GitHub"
      >
        Star
      </a>
    </div>
  )
}
