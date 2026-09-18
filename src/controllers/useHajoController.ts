import { useCallback, useState } from 'react';
import type { HajoTipus } from '../adat';
import HajoModel from '../models/HajoModel';

/** The Controller: it connects React user actions to the Model. */
export default function useHajoController() {
  const [modell] = useState(() => new HajoModel());
  const [hajok, setHajok] = useState<HajoTipus[]>(() => modell.getLista());
  const [kosar, setKosar] = useState<HajoTipus[]>(() => modell.getKosarLista());
  const [nyitottHajoId, setNyitottHajoId] = useState<number | null>(null);

  const rendezesNevSzerint = useCallback(() => {
    setHajok(modell.rendezNevSzerint());
  }, [modell]);

  const kosarba = useCallback((id: number) => {
    setKosar(modell.kosarba(id));
  }, [modell]);

  const kiveszKosarbol = useCallback((id: number) => {
    setKosar(modell.kiveszKosarbol(id));
  }, [modell]);

  const reszletekValtasa = useCallback((id: number) => {
    setNyitottHajoId((elozoId) => (elozoId === id ? null : id));
  }, []);

  return {
    hajok,
    kosar,
    nyitottHajoId,
    rendezesNevSzerint,
    kosarba,
    kiveszKosarbol,
    reszletekValtasa,
  };
}
