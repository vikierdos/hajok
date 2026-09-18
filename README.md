# React Hajók

Ez egy egyszerű React projekt, amely különböző híres hajókat jelenít meg kártyák formájában.

A projekt **React**, **TypeScript** és **Vite** használatával készült.

## Az oldal

A hajóknál az alábbi adatok jelennek meg:

* hajó neve
* kapitány neve
* színe
* képe
* rövid leírása

A hajók részletei külön gombbal nyithatók meg.

Az oldal itt érhető el:

https://vikierdos.github.io/hajok/

## Funkciók

Az oldalon lehet:

* a hajókat név szerint rendezni
* megnyitni a hajók részletes leírását
* hajókat kosárba tenni
* hajókat eltávolítani a kosárból
* ugyanazt a hajót többször is a kosárba rakni

## Felépítés

A hajók adatai az `adat.tsx` fájlban vannak.

A projekt külön mappákra van bontva:

* `models` – az adatok és a hozzájuk tartozó műveletek
* `controllers` – kezeli a felhasználói műveleteket
* `views` – a hajók és a kosár megjelenítése

A főbb komponensek:

* `Hajo.tsx` – egy hajó megjelenítése
* `Hajok.tsx` – a hajók listája
* `Kosar.tsx` – a kosár tartalma

## Használt technológiák

* React
* TypeScript
* Vite
* CSS
* GitHub Pages

## Projekt futtatása

A repository klónozása:

```bash
git clone https://github.com/vikierdos/hajok.git
```

Belépés a projekt mappájába:

```bash
cd hajok
```

Csomagok telepítése:

```bash
npm install
```

Fejlesztői szerver indítása:

```bash
npm run dev
```

## Build

A kész verzió létrehozása:

```bash
npm run build
```

A build a `dist` mappába kerül.

## GitHub Pages

A projekt GitHub Actions segítségével automatikusan feltöltődik GitHub Pages-re, amikor változás kerül a `main` branch-re.

A workflow fájl:

```text
.github/workflows/deploy.yml
```

## Készítette

Erdős Viki
