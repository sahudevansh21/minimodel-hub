import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MiniModel Hub</title>
        <meta name="description" content="Central hub for scale model builders: marketplace, galleries, and discussion." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}