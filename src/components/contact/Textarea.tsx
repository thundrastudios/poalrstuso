import { Pencil } from 'lucide-react'

type Props = {
	label?: string
	placeholder?: string
}

export default function Textarea({
	label = 'Message',
	placeholder = 'Tell me about your project...'
}: Props) {
	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-text-secondary'>
				{label}
			</label>

			<div className='relative'>
				<Pencil className='absolute left-4 top-5 h-5 w-5 text-text-secondary shrink-0' />

				<textarea
					name='message'
					placeholder={placeholder}
					className='min-h-32 sm:min-h-36 w-full resize-none rounded-xl border border-border bg-background py-4 pl-12 pr-4 text-base text-text-primary placeholder:text-text-secondary/60 outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/20'
				/>
			</div>
		</div>
	)
}
