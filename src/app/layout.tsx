import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gabrr Bio',
  description: 'Start profiting from your content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Theme>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <header className="flex justify-end px-8 py-6">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </body>
        </html>
      </Theme>
    </ClerkProvider>
  );
}
