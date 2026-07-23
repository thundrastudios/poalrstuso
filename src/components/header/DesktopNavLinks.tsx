'use client'

import { NAV_LINKS } from './NavData'



export function DesktopNavLinks() {
	return (
		<div className='hidden md:flex items-center justify-end flex-1 gap-8 lg:gap-10'>
			<nav>
				<ul className='flex flex-row gap-6 lg:gap-8 items-center list-none'>
					{NAV_LINKS.map(link => (
						<li key={link.id} className='relative group'>
							<a
								href={link.href}
								className='  hover:text-accent transition-colors duration-200 font-medium py-2 block'
							>
								{link.label}
							</a>
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-accent-dark animate group-hover:w-full' />
						</li>
					))}
				</ul>
			</nav>

			<div className='flex items-center gap-4'>
				<button className='cursor-pointer flex items-center gap-1 border hover:bg-accent-dark  border-border    rounded-full px-4 py-2 text-text-secondary hover:text-text-primary animate font-medium text-sm lg:text-base'>
					En
				</button>
				<button className='cursor-pointer  hover:bg-accent-light rounded-full px-5 py-2 bg-accent-dark   animate font-bold text-sm lg:text-base'>
					Start
				</button>
			</div>
		</div>
	)
}

export default DesktopNavLinks