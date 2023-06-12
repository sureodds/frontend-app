import './globals.css'
import localFont from '@next/font/local'

const zonapro = localFont({
  src: [
    {
      path: '../public/fonts/ZonaPro-Light.otf',
      weight: '300'
    },
    {
      path: '../public/fonts/ZonaPro.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/ZonaPro-SemiBold.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/ZonaPro-Bold.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/ZonaPro-ExtraBold.otf',
      weight: '800'
    }
  ],
  variable: '--font-zona'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${zonapro.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}