export const metadata = {
  title: 'Baureform',
  description: 'Minimal Next.js 14 app ready for Vercel deployment.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
