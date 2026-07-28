'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import DesktopNavLinks from './DesktopNavLinks'
import { Logo } from './Logo'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		setIsScrolled(latest > 20)
	})

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg shadow-black/5'
					: 'bg-transparent py-5 border-b border-transparent'
			}`}
		>
			<div className='max-w-7xl px-6 flex items-center justify-between mx-auto transition-all duration-300'>
				<Logo />
				<DesktopNavLinks />
			</div>
		</motion.header>
	)
}

export default Header
