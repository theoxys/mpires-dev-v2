import { FC, SVGProps } from 'react'
import { DesignIcon } from './DesignIcon'
import { HtmlIcon } from './HtmlIcon'
import { JsIcon } from './JsIcon'
import { SettingsIcon } from './SettingsIcon'

interface IsometricIconProps extends SVGProps<SVGSVGElement> {
  iconName: 'design' | 'html' | 'js' | 'settings'
}

export const IsometricIcon: FC<IsometricIconProps> = ({ iconName, ...props }) => {
  const icons = {
    design: DesignIcon,
    html: HtmlIcon,
    js: JsIcon,
    settings: SettingsIcon,
  }

  const Icon = icons[iconName]

  return <Icon {...props} />
}
