import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
	return (
		<div className='shrink-0 flex items-center'>
			<Link href='/'>
				<Image
					src='/polarcode.webp'
					alt='PolarCode'
					width={160}
					height={60}
				
					className=' w-auto object-contain'
					priority
				/>
			</Link>
		</div>
	)
}
