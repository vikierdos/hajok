import { HAJOLISTA } from './adat';
import './App.css';
import Hajok from './components/Hajok';

/** a szülőkomponens a gyerekelemnek props-on keresztül adja át */

function App() {
  return (
    <>
      <header>
          <h1>React Hajók</h1>
      </header>
      <article>
        <Hajok lista = {HAJOLISTA} />
      </article>
      <footer><p>Erdős Viki</p></footer>
    </>
  )
}

export default App
