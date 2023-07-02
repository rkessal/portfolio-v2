import "./globals.css";

export const metadata = {
  title: "Errka",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white">{children}</body>
    </html>
  );
}
