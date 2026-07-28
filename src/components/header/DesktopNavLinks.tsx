'use client'

import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/data/NavData'

export function DesktopNavLinks() {
	return (
		<div className='hidden md:flex items-center justify-end flex-1 gap-8 lg:gap-10'>
			<nav>
				<ul className='flex flex-row gap-6 lg:gap-8 items-center list-none'>
					{NAV_LINKS.map((link, index) => (
						<motion.li
							key={link.id}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='relative group'
						>
							<a
								href={link.href}
								className='text-text-secondary hover:text-accent-light transition-colors duration-200 font-medium py-2 block text-sm lg:text-base'
							>
								{link.label}
							</a>
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-aurora-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(45,212,191,0.8)]' />
						</motion.li>
					))}
				</ul>
			</nav>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className='flex items-center gap-4'
			>
				<button className='cursor-pointer flex items-center gap-1 border border-border/80 bg-background-secondary/50 hover:bg-background-secondary hover:border-accent-light/40 rounded-full px-4 py-2 text-text-secondary hover:text-text-primary transition-all duration-300 font-medium text-sm lg:text-base backdrop-blur-sm'>
					En
				</button>

				<button className='cursor-pointer rounded-full px-5 py-2 bg-accent hover:bg-accent-dark text-text-primary transition-all duration-300 font-bold text-sm lg:text-base shadow-md shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.97]'>
					Start
				</button>
			</motion.div>
		</div>
	)
}

export default DesktopNavLinks
