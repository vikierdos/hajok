import type { HajoTipus } from '../adat';
import '../css/hajo.css';

interface HajoProps {
  hajom: HajoTipus;
  reszletekNyitva: boolean;
  onKosarba: (id: number) => void;
  onReszletekValtasa: (id: number) => void;
}

/** The View for one boat card. */
export default function Hajo({
  hajom,
  reszletekNyitva,
  onKosarba,
  onReszletekValtasa,
}: HajoProps) {
  const reszletekId = `hajo-reszletek-${hajom.id}`;

  return (
    <div className="hajo">
      <img className="hajo-kep" src={hajom.kep} alt={hajom.nev} />
      <div className="hajo-cim">
        <h2>{hajom.nev}</h2>
      </div>
      <p>
        <span>Kapitány neve:</span> {hajom.kapitany}
      </p>
      <p>
        <span>Hajó színe:</span> {hajom.szin}
      </p>
      <button
        className="reszletek-gomb"
        type="button"
        aria-expanded={reszletekNyitva}
        aria-controls={reszletekId}
        onClick={() => onReszletekValtasa(hajom.id)}
      >
        {reszletekNyitva ? 'Részletek bezárása' : 'Részletek'}
      </button>
      {reszletekNyitva && (
        <div className="hajo-reszletek" id={reszletekId}>
          <p className="hajo-leiras">
            <span>Leírás:</span> {hajom.leiras}
          </p>
          <button
            className="kosar-gomb"
            type="button"
            onClick={() => onKosarba(hajom.id)}
          >
            Kosárba
          </button>
        </div>
      )}
    </div>
  );
}
