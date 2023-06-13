import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        <h2 className={`mb-3 text-2xl font-extrabold`}>Welcome To SuraOdds</h2>
        <Link href="/dashboard" className="p-4 text-center bg-main text-white">
          Go To Dashboard
        </Link>
      </div>
    </main>
  );
}
