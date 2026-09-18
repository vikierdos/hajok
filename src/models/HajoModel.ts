import { HAJOLISTA, type HajoTipus } from '../adat';

/** The Model: it owns the boat data and the data operations. */
export default class HajoModel {
  private readonly lista: readonly HajoTipus[];
  private kosarLista: HajoTipus[] = [];

  constructor(lista: readonly HajoTipus[] = HAJOLISTA) {
    this.lista = lista;
  }

  getLista(): HajoTipus[] {
    return [...this.lista];
  }

  rendezNevSzerint(): HajoTipus[] {
    return this.getLista().sort((elsoHajo, masodikHajo) =>
      elsoHajo.nev.localeCompare(masodikHajo.nev, 'hu'),
    );
  }

  getKosarLista(): HajoTipus[] {
    return [...this.kosarLista];
  }

  kosarba(id: number): HajoTipus[] {
    const hajo = this.lista.find((adat) => adat.id === id);

    if (hajo) {
      this.kosarLista = [...this.kosarLista, hajo];
    }

    return this.getKosarLista();
  }

  kiveszKosarbol(id: number): HajoTipus[] {
    const torlendoIndex = this.kosarLista.findIndex((adat) => adat.id === id);

    if (torlendoIndex !== -1) {
      this.kosarLista = this.kosarLista.filter((_, index) => index !== torlendoIndex);
    }

    return this.getKosarLista();
  }
}
