export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        <h2 className={`mb-3 text-2xl font-bold`}>
          Welcome To SureOdds{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </div>
    </main>
  );
}
