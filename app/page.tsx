const services = [
  'Projektentwicklung & Planung',
  'Sanierung & Rekonstruktion',
  'Neubau',
  'Generalunternehmer (GU)'
];

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:px-16">
        <span className="text-sm uppercase tracking-[0.25em] text-amber-400">Berlin</span>
        <h1 className="text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">Baureform GmbH</h1>
        <p className="max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Ganzheitliche Projektentwicklung & Bauausführung
        </p>
        <div>
          <a
            href="mailto:info@baureform.org"
            className="inline-flex items-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-950 transition hover:bg-amber-300"
          >
            Projekt anfragen
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">Leistungen</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-8">
              <h3 className="text-xl font-medium text-amber-400">{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Über uns</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
          Baureform GmbH steht für strukturierte Planung, transparente Kalkulation und zuverlässige
          Ausführung. Wir begleiten Bauprojekte von der ersten Idee bis zur termingerechten Übergabe
          und schaffen Lösungen, die technisch, wirtschaftlich und architektonisch überzeugen.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 sm:p-12">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Kontakt</h2>
          <div className="space-y-2 text-neutral-200">
            <p className="font-medium text-white">Baureform GmbH</p>
            <p>Pallasstraße 25, 10781 Berlin</p>
            <p>
              <a className="underline decoration-amber-400 underline-offset-4" href="mailto:info@baureform.org">
                info@baureform.org
              </a>
            </p>
          </div>
          <a
            href="mailto:info@baureform.org"
            className="mt-8 inline-flex items-center rounded-full border border-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-amber-400 transition hover:bg-amber-400 hover:text-neutral-950"
          >
            Projekt anfragen
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <span>© {new Date().getFullYear()} Baureform GmbH</span>
          <div className="flex gap-6">
            <a className="transition hover:text-amber-400" href="/impressum">
              Impressum
            </a>
            <a className="transition hover:text-amber-400" href="/datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
