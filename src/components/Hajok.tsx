
import Hajo from "./Hajo";
import "../css/hajok.css";
import type { HajoTipus } from "../adat";
interface hajokProps {
  lista: HajoTipus[]
}

export default function Hajok({ lista }: hajokProps) {
    return (
        <div className="hajok">
        {
            lista.map((e, i) => (
                <Hajo key={i} hajom={e} />
            ))
        }
        </div>
    )
}
