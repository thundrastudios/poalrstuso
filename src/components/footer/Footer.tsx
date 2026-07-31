import Image from 'next/image'
import Link from 'next/link'

import { logoLinks, footerColumns } from '@/data/FooterLinks'
export function Footer() {
	return (
		<footer className=' w-full py-20 md:py-32  max-w-7xl mx-auto px-4'>
			<div className='grid grid-cols-3 gap-10'>
				<div className='flex flex-col gap-6  items-start'>
					{' '}
					<Link href='/'>
						<Image
							src='/polarcode.webp'
							alt='PolarCode'
							width={100}
							height={60}
							className='w-auto object-contain'
						/>
					</Link>
					<p className='text-sm  text-text-secondary leading-relaxed'>
						We create stunning websites and credit solutions that help
						businesses grow and turn visitors into customers.
					</p>
					<div className='flex gap-6 '>
						{logoLinks.map(({ icon: Icon, link }) => (
							<Link
								key={link}
								href={link}
								className='text-text-secondary hover:text-accent-light transition-colors duration-300'
							>
								<Icon className='w-6 h-6' />
							</Link>
						))}
					</div>
				</div>
				{footerColumns.map(column => (
					<div key={column.title} className='flex flex-col gap-2'>
						<h3 className='text-xl font-bold text-text-primary'>
							{column.title}
						</h3>

						<ul className='flex flex-col gap-3'>
							{column.links.map(link => (
								<li key={link} className='relative group w-fit'>
									<Link
										href='/'
										className='text-sm font-medium text-text-secondary hover:text-accent-light transition-colors duration-300'
									>
										{link}
									</Link>

									<span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-aurora-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(45,212,191,.8)]' />
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer
