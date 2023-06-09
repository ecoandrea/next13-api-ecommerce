import Navbar from '@/components/Navbar'
import './globals.css'




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
    <html lang="en">
      <body> 
        <Navbar />
        <main className='container mx-automax-w-xs md:max-w-3xl '>{children}</main>
        </body>
    </html>
  )
}
