export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header>Hello</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </section>
  );
}
