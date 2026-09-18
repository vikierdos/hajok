import type { HajoTipus } from '../adat';

interface KosarProps {
  lista: HajoTipus[];
  onKivesz: (id: number) => void;
}

/** The View for the selected boats. */
export default function Kosar({ lista, onKivesz }: KosarProps) {
  const tetelek = Array.from(
    lista.reduce((osszegzes, hajo) => {
      const tetel = osszegzes.get(hajo.id);
      osszegzes.set(hajo.id, { hajo, darab: (tetel?.darab ?? 0) + 1 });
      return osszegzes;
    }, new Map<number, { hajo: HajoTipus; darab: number }>()),
  ).map(([, tetel]) => tetel);

  return (
    <section className="kosar" aria-labelledby="kosar-cim">
      <div className="kosar-fejlec">
        <h2 id="kosar-cim">Kosár</h2>
        <span aria-label={`${lista.length} hajó a kosárban`}>{lista.length}</span>
      </div>

      {lista.length === 0 ? (
        <p className="kosar-ures">Még nem választottál hajót.</p>
      ) : (
        <ul className="kosar-lista">
          {tetelek.map(({ hajo, darab }) => (
            <li key={hajo.id}>
              <img src={hajo.kep} alt="" />
              <span>{hajo.nev} <strong>×{darab}</strong></span>
              <button type="button" onClick={() => onKivesz(hajo.id)}>
                Eltávolítás
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
