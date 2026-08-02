import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
	return (
		<div className='flex shrink-0 items-center'>
			<Link href='/'>
				<Image
					src='/polarcode.webp'
					alt='PolarCode'
					width={160}
					height={60}
					priority
					className='h-3 w-auto object-contain md:h-8'
				/>
			</Link>
		</div>
	)
}

export default Logo
