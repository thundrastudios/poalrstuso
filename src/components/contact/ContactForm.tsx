import Reveal from '@/components/animations/Reveal'
import Input from './FormField'
import Textarea from './Textarea'
import { User, Mail, FileText } from 'lucide-react'

export default function ContactForm() {
	return (
		<Reveal>
			<div className='rounded-3xl bg-background-secondary border border-border p-5 sm:p-8 md:p-10'>
				<div className='text-center'>
					<h3 className='text-2xl sm:text-3xl font-bold text-text-primary'>
						Send a message
					</h3>

					<p className='mt-2 sm:mt-3 text-sm sm:text-base text-text-secondary'>
						Fill out the form and I&apos;ll contact you soon.
					</p>
				</div>

				<form className='mt-6 sm:mt-8 space-y-5 sm:space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
						<Input
							icon={User}
							label='Full Name'
							placeholder='John Doe'
						/>

						<Input
							icon={Mail}
							label='Email'
							placeholder='john@example.com'
							type='email'
						/>
					</div>

					<Input
						icon={FileText}
						label='Subject'
						placeholder='Website Development'
					/>

					<Textarea />

					<button
						type='submit'
						className='h-14 w-full rounded-xl bg-accent text-white font-semibold transition-smooth active:opacity-75 sm:hover:opacity-75'
					>
						Send Message
					</button>
				</form>
			</div>
		</Reveal>
	)
}
