import { GitBranchPlus } from 'lucide-react'

export const footerColumns: FooterColumnProps[] = [
  {
    columnName: 'Build with',
    links: [
      {
        name: 'NextJS 13',
        href: 'https://nextjs.org',
      },
      {
        name: 'Typescript',
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com',
      },
    ],
  },

  {
    columnName: 'My Social profiles',
    links: [
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/matheusfpires/',
      },
      {
        name: 'Github',
        href: 'https://github.com/theoxys',
      },
      {
        name: 'Youtube',
        href: 'https://www.youtube.com/@matheuspires-dev',
      },
    ],
  },
]

export interface FooterLinkProps {
  href: string
  name: string
}

export interface FooterColumnProps {
  columnName: string
  links: FooterLinkProps[]
}

export const FooterColumn = ({ columnName, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xs text-foreground/70 uppercase tracking-widest">{columnName}</h1>

      {links.map((link, index) => (
        <a href={link.href} className="text-sm text-foreground/40" key={index}>
          {link.name}
        </a>
      ))}
    </div>
  )
}

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col gap-12 items-center w-full min-h-[350px] border-t border-border relative justify-center bg-stone-950">
      <div className="absolute w-[80rem] h-[1px] bg-gradient-to-r from-transparent via-stone-600 to-transparent top-0"></div>

      <div className="flex gap-4 w-full max-w-[900px] py-10 min-h-full justify-between">
        <div className="flex flex-col gap-4 w-[250px] min-h-full">
          <h2 className="text-sm text-foreground/70">Made With ❤️ in Minas Gerais | Brazil</h2>

          <span className="text-sm text-foreground/70">
            This portfolio is an open source project and available for community!
          </span>
        </div>

        {footerColumns.map((column, index) => (
          <FooterColumn columnName={column.columnName} links={column.links} key={index} />
        ))}
      </div>
      <span className="text-sm text-foreground/70">MIT License - {year} | Matheus Pires.</span>
    </div>
  )
}
