export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* <Sidebar></Sidebar> */}
      SIDEBAR
      {children}
    </main>
  );
}
