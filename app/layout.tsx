import { Sidebar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Portfolio Cudtad',
  description: 'Portfolio Cudtad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grid grid-cols-12">
        <div className='col-span-3 relative'>
          <Sidebar />
        </div>
        <div className='col-span-9'>
          {children}
        </div>
      </body>
    </html>
  )
}
