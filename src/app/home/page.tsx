import Link from 'next/link';

const Home: React.FC = () => {
  console.log(process.env.API_URL);

  return (
    <div className="max-w-3xl mx-auto">
      <header className="flex items-center gap-10 mt-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold text-center">
            The free, fun, and effective method to learn Italian!
          </h1>
          {/* <p>Fissa degli obiettivi raggiungibili. Ricevi i consigli dei madrelingua. Fai progressi veri. Apri un mondo di possibilità imparando un'altra lingua.</p> */}
          <Link className="bg-green-400 px-16 rounded-full py-2 font-semibold" href="/dashboard">
            Start now for free
          </Link>
        </div>
        <div>
          <img alt="hero" src="https://via.placeholder.com/300" />
        </div>
      </header>
      <section className="grid">
        <h2 className="text-xl font-bold text-center">Perché imparare la lingua con Duogringo?</h2>
        <article className="flex gap-8">
          <div>
            <img alt="impari al tuo ritmo" src="https://via.placeholder.com/200" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Impara in compagnia, impara di più</h3>
            <p>
              Lasciati alle spalle i libri di testo! Esercitati con la pronuncia, avvicinati a nuove
              culture e scambia suggerimenti linguistici con la nostra community globale di
              studenti.
            </p>
          </div>
        </article>
        <article className="flex gap-8">
          <div>
            <h3 className="font-semibold text-lg">Impara in compagnia, impara di più</h3>
            <p>
              Lasciati alle spalle i libri di testo! Esercitati con la pronuncia, avvicinati a nuove
              culture e scambia suggerimenti linguistici con la nostra community globale di
              studenti.
            </p>
          </div>
          <div>
            <img alt="impari al tuo ritmo" src="https://via.placeholder.com/200" />
          </div>
        </article>
        <article className="flex gap-8">
          <div>
            <img alt="impari al tuo ritmo" src="https://via.placeholder.com/200" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Impara in compagnia, impara di più</h3>
            <p>
              Lasciati alle spalle i libri di testo! Esercitati con la pronuncia, avvicinati a nuove
              culture e scambia suggerimenti linguistici con la nostra community globale di
              studenti.
            </p>
          </div>
        </article>
      </section>
      <footer className="flex justify-center gap-4 font-semibold">
        <p>Chi siamo</p>
        <p>Aiuto e supporto</p>
        <p>Privacy e termini</p>
      </footer>
    </div>
  );
};

export default Home;
