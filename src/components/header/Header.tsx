'use client'

import { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import DesktopNavLinks from './DesktopNavLinks'
import { Logo } from './Logo'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		setIsScrolled(latest > 20)
	})

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg shadow-black/5'
					: 'bg-transparent py-5 border-b border-transparent'
			}`}
		>
			<div className='max-w-7xl px-6 flex items-center justify-between mx-auto transition-all duration-500'>
				<Logo />

				<DesktopNavLinks />
			</div>
		</header>
	)
}

export default Header
