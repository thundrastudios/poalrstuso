// app/layout.tsx
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import "./globals.css" 
const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
})

const playfair = Playfair_Display({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-playfair',
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
		>
			<body>{children}</body>
		</html>
	)
}
