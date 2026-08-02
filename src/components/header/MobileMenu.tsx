'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/NavData'
import { useState } from 'react'

const menuVariants: Variants = {
	closed: {
		x: '100%'
	},
	opened: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 30
		}
	}
}

const navVariants: Variants = {
	closed: {},
	opened: {
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.15
		}
	}
}

const itemVariants: Variants = {
	closed: {
		opacity: 0,
		y: 16
	},
	opened: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeOut'
		}
	}
}

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='md:hidden flex items-center justify-center text-text-primary p-2.5'
				aria-label='Open menu'
			>
				<Menu size={24} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial='closed'
						animate='opened'
						exit='closed'
						className='fixed inset-0 z-50 flex h-dvh w-full flex-col items-center justify-center gap-8 bg-background px-6 sm:gap-10 md:hidden'
					>
						<button
							onClick={() => setIsOpen(false)}
							className='absolute right-4 top-4 flex items-center justify-center p-2.5 text-text-primary sm:right-6 sm:top-6'
							aria-label='Close menu'
						>
							<X size={28} />
						</button>

						<motion.nav
							variants={navVariants}
							initial='closed'
							animate='opened'
							className='flex w-full max-w-sm flex-col items-stretch gap-1'
						>
							{NAV_LINKS.map(link => (
								<motion.div
									key={link.id}
									variants={itemVariants}
								>
									<a
										href={link.href}
										onClick={() => setIsOpen(false)}
										className='block w-full whitespace-nowrap rounded-xl py-3 text-center text-lg font-bold tracking-wide text-text-primary transition-colors active:bg-background-secondary active:text-accent-light sm:text-2xl'
									>
										{link.label}
									</a>
								</motion.div>
							))}
						</motion.nav>

						<motion.div
							variants={itemVariants}
							className='flex w-full max-w-xs flex-col gap-3 sm:gap-4'
						>
							<button className='w-full rounded-full border border-border py-3.5 font-semibold text-text-primary transition active:bg-background-secondary'>
								English
							</button>

							<button className='w-full rounded-full bg-accent py-3.5 font-bold text-white transition active:opacity-80'>
								Start
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
