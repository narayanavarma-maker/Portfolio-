import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A site built with Next.js and Builder.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
