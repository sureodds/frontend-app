import { Sidenav } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidenav />
      <main>{children}</main>
      <footer>Footer</footer>
    </section>
  );
}
