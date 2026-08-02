'use client'

import { NAV_LINKS } from '@/data/NavData'

export function DesktopNavLinks() {
	return (
		<div className='flex items-center gap-8 lg:gap-10'>
			<nav>
				<ul className='flex items-center gap-6 lg:gap-8'>
					{NAV_LINKS.map(link => (
						<li
							key={link.id}
							className='relative group'
						>
							<a
								href={link.href}
								className='block py-2 text-sm lg:text-base font-medium text-text-secondary transition-colors hover:text-accent-light'
							>
								{link.label}
							</a>

							<span className='absolute bottom-0 left-0 h-0.5 w-0 bg-aurora-cyan transition-all group-hover:w-full' />
						</li>
					))}
				</ul>
			</nav>

			<div className='flex items-center gap-4'>
				<button className='cursor-pointer flex items-center gap-1 border border-border/80 bg-background-secondary/50 hover:bg-background-secondary hover:border-accent-light/40 rounded-full px-4 py-2 text-text-secondary hover:text-text-primary transition-all duration-300 font-medium text-sm lg:text-base backdrop-blur-sm'>
					En
				</button>

				<button className='cursor-pointer rounded-full px-5 py-2 bg-accent hover:bg-accent-dark text-text-primary transition-all duration-300 font-bold text-sm lg:text-base shadow-md shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.97]'>
					Start
				</button>
			</div>
		</div>
	)
}

export default DesktopNavLinks
