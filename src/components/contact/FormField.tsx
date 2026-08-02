import { LucideIcon } from 'lucide-react'

type Props = {
	label: string
	placeholder: string
	icon: LucideIcon
	type?: string
}

export default function Input({
	label,
	placeholder,
	icon: Icon,
	type = 'text'
}: Props) {
	return (
		<div>
			<label className='block mb-2 text-sm text-text-secondary'>{label}</label>

			<div className='relative'>
				<Icon className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary shrink-0' />

				<input
					type={type}
					placeholder={placeholder}
					className='h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-base outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/20'
				/>
			</div>
		</div>
	)
}
