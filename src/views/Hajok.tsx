import type { HajoTipus } from '../adat';
import '../css/hajok.css';
import Hajo from './Hajo';

interface HajokProps {
  lista: HajoTipus[];
  nyitottHajoId: number | null;
  onKosarba: (id: number) => void;
  onReszletekValtasa: (id: number) => void;
}

/** The View for the complete boat list. */
export default function Hajok({
  lista,
  nyitottHajoId,
  onKosarba,
  onReszletekValtasa,
}: HajokProps) {
  return (
    <div className="hajok">
      {lista.map((hajo) => (
        <Hajo
          key={hajo.id}
          hajom={hajo}
          reszletekNyitva={nyitottHajoId === hajo.id}
          onKosarba={onKosarba}
          onReszletekValtasa={onReszletekValtasa}
        />
      ))}
    </div>
  );
}
