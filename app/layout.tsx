import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModelProvider } from '@/components/providers/model-provider'
import { SocketProvider } from '@/components/providers/socket-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='discord-theme'
          >
            <SocketProvider>
              <ModelProvider />
              {children}
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
