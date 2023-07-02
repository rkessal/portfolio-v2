export const metadata = {
  title: "Oms",
  description: "Organisation mondiale de la solidarité",
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
