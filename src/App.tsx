import './App.css';
import useHajoController from './controllers/useHajoController';
import Hajok from './views/Hajok';
import Kosar from './views/Kosar';

/** a szülőkomponens a gyerekelemnek props-on keresztül adja át */

function App() {
  const {
    hajok,
    kosar,
    nyitottHajoId,
    rendezesNevSzerint,
    kosarba,
    kiveszKosarbol,
    reszletekValtasa,
  } = useHajoController();

  return (
    <>
      <header>
          <h1>React Hajók</h1>
      </header>
      <main className="oldal-tartalom">
        <article className="hajok-tartalom">
          <section className="vezerlok" aria-label="Hajólista rendezése">
            <button type="button" onClick={rendezesNevSzerint}>
              Rendezés név szerint
            </button>
          </section>
          <Hajok
            lista={hajok}
            nyitottHajoId={nyitottHajoId}
            onKosarba={kosarba}
            onReszletekValtasa={reszletekValtasa}
          />
        </article>
        <aside className="kosar-oldalsav">
          <Kosar lista={kosar} onKivesz={kiveszKosarbol} />
        </aside>
      </main>
      <footer><p>Erdős Viki</p></footer>
    </>
  )
}

export default App
