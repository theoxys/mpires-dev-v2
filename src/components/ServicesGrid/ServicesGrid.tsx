import { IsometricIcon } from '../IsometricIcons'

interface ServiceItemProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 w-full">
      <div className="flex items-center mb-4">
        <IsometricIcon
          iconName={icon as 'design' | 'html' | 'js' | 'settings'}
          className="w-36 h-36 opacity-30"
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-stone-500">{description}</p>
    </div>
  )
}

export const ServicesGrid = () => {
  const services = [
    {
      title: 'Frontend Development',
      description:
        'Frontend Development using React, Next.js, Tailwind CSS, TypeScript and other advanced technologies',
      icon: 'html',
    },
    {
      title: 'Backend Development',
      description:
        'Backend Development using Node.js, Express, MongoDB, PostgreSQL and other advanced technologies',
      icon: 'js',
    },
    {
      title: 'UI/UX Design',
      description: 'UI/UX Design using Figma, and user experience concepts',
      icon: 'design',
    },
    {
      title: 'Technical Leadership',
      description:
        'Technical Leadership, system architecture, and project management for saas products',
      icon: 'settings',
    },
  ]

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <span className="text-xs tracking-widest text-stone-500 align-middle uppercase">skills</span>
      <h1 className="text-4xl font-semibold">My Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto border-l border-t border-dashed border-border *:border-dashed *:border-b *:border-r *:border-border">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  )
}
