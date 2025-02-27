import '@/app/ui/global.css'
import TypekitLoader from '@/app/ui/fonts'
import {Inter, Roboto_Mono} from 'next/font/google'
import {Metadata} from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
    <TypekitLoader/>
    <body className="font-dnpshueigothic">{children}</body>
    </html>
  );
}
