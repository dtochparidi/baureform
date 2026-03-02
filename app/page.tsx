const reasons = [
  {
    title: 'Strukturierte Planung',
    description:
      'Wir führen alle Gewerke und Entscheidungsphasen in einem präzisen, nachvollziehbaren Ablauf zusammen.'
  },
  {
    title: 'Transparente Kalkulation',
    description:
      'Von der Erstschätzung bis zur finalen Vergabe sind Kostenmodelle klar dokumentiert und belastbar.'
  },
  {
    title: 'Zuverlässige Umsetzung',
    description:
      'Wir steuern Termine, Qualität und Kommunikation mit höchster Verbindlichkeit bis zur Übergabe.'
  }
];

const services = [
  {
    title: 'Projektentwicklung & Planung',
    description: 'Strategische Entwicklung von Grundstücken und Gebäudekonzepten mit klaren Zielbildern.'
  },
  {
    title: 'Sanierung & Rekonstruktion',
    description: 'Sorgfältige Modernisierung und Wiederherstellung mit Respekt vor Bestand und Substanz.'
  },
  {
    title: 'Neubau',
    description: 'Hochwertige Neubauprojekte mit architektonischer Präzision und effizienter Bauabwicklung.'
  },
  {
    title: 'Generalunternehmer (GU)',
    description: 'Ein zentraler Partner für Planung, Koordination und Realisierung aus einer Hand.'
  }
];

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_42%),linear-gradient(160deg,#0a0a0a_0%,#111827_45%,#0a0a0a_100%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-4xl space-y-8">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.36em] text-amber-400 sm:text-sm">
              BERLIN
            </span>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Projektentwicklung für anspruchsvolle Architektur.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
              Baureform GmbH verbindet Planung, Kalkulation und Bauausführung zu einer klaren,
              verlässlichen Gesamtleistung für komplexe Bauvorhaben.
            </p>
            <a
              href="mailto:info@baureform.org"
              className="inline-flex items-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_16px_45px_rgba(251,191,36,0.35)]"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">Profil</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Warum Baureform</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900"
            >
              <h3 className="text-xl font-medium text-white">{reason.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">Leistungsbereiche</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Leistungen</h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-10 transition duration-300 hover:border-amber-300/70 hover:shadow-[0_0_32px_rgba(251,191,36,0.2)]"
            >
              <h3 className="text-2xl font-medium text-amber-400">{service.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">Über uns</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Architekturprojekte mit Substanz und Klarheit</h2>
          </div>
          <p className="text-lg leading-relaxed text-neutral-300">
            Baureform GmbH steht für strukturierte Planung, transparente Kalkulation und zuverlässige
            Ausführung. Wir begleiten Bauprojekte von der ersten Idee bis zur termingerechten Übergabe
            und schaffen Lösungen, die technisch, wirtschaftlich und architektonisch überzeugen.
          </p>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 sm:p-12">
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

      <footer className="border-t border-neutral-800/90">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 md:grid-cols-3 lg:px-16">
          <div className="space-y-2 text-neutral-300">
            <p className="text-lg font-medium text-white">Baureform GmbH</p>
            <p>Pallasstraße 25, 10781 Berlin</p>
            <p>
              <a className="transition hover:text-amber-400" href="mailto:info@baureform.org">
                info@baureform.org
              </a>
            </p>
          </div>
          <div className="space-y-2 text-neutral-400">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Links</p>
            <a className="block transition hover:text-amber-400" href="/impressum">
              Impressum
            </a>
            <a className="block transition hover:text-amber-400" href="/datenschutz">
              Datenschutz
            </a>
          </div>
          <div className="text-sm text-neutral-500 md:text-right">© {new Date().getFullYear()} Baureform GmbH</div>
        </div>
      </footer>
    </main>
  );
}
