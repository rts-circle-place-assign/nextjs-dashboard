import '@/app/ui/global.css'
import TypekitLoader from '@/app/ui/fonts'
import {Metadata} from 'next';
import {Providers} from "./providers";

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
    <html lang="ja" className="dark">
    <TypekitLoader/>
    <body className="font-dnpshueigothic">
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
