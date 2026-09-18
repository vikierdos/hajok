import type { HajoTipus } from "../adat";
import "../css/hajo.css";
interface hajoProps {
  hajom: HajoTipus
}

function Hajo({ hajom }: hajoProps) {
  return (
    <div className="hajo">
      <h2>{hajom.nev}</h2>
      <p>
        <span>Kapitány neve:</span> {hajom.kapitany}
      </p>
      <p>
        <span>Hajó színe:</span> {hajom.szin}
      </p>
    </div>
  );
}

export default Hajo;
