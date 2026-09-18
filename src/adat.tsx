export type Hajoszin = 'fekete' | 'kék' | 'piros' | 'fehér' | 'zöld' | 'arany'

export interface HajoTipus{
    readonly id: number
    nev: string
    kapitany: string
    valodi: boolean
    szin: Hajoszin
    leiras: string
}

export const HAJOLISTA:HajoTipus[] = [
    {
        id: 26,
        nev:"Fekete Gyöngy",
        szin:"fekete",
        kapitany:"Jack Sparrow",
        valodi: false,
        leiras:"A Fekete Gyöngy egy híres kalózhajó a Karib-tenger térségében, amelyet a kalózkapitány Jack Sparrow vezetett. A hajó híres volt a gyorsaságáról és a kalózkodásról, és az egyik legismertebb hajó a filmekben",
    }
    ,{
        id: 18,
        nev:"Bolygó Hollandi",
        szin:"zöld",
        kapitany:"Davy Jones",
        valodi: false,
        leiras:"A Bolygó Hollandi egy legendás hajó a tengerészek körében, amely a tenger mélyén kísérti a hajósokat, akik elmerülnek a tengerben és soha nem térnek vissza. A hajó híres volt a rejtélyes eltűnéséről és a kalózkodásról.",
    }
    ,{
        id: 37,
        nev:"Titanic",
        szin:"fehér",
        kapitany:"Leonardo DiCaprio",
        valodi: true,
        leiras:"A Titanic egy híres óceánjáró hajó, amely 1912-ben süllyedt el, és az egyik legismertebb hajó a történelemben. A hajó híres volt a luxusáról és a kényelméről, és az egyik legismertebb hajó a történelemben",
    }
    ,{
        id: 46,
        nev:"Golden Hind",
        szin:"arany",
        kapitany:"Sir Francis Drake",
        valodi: true,
        leiras:"A Golden Hind egy híres kalózhajó, amely a 16. században működött, és Sir Francis Drake kapitány vezette. A hajó híres volt a kalózkodásról és a felfedező utazásairól.",
    }
    ,{
        id: 10,
        nev:"Queen Mary",
        szin:"kék",
        kapitany:"Sir John Smith",
        valodi: true,
        leiras:"A Queen Mary egy híres óceánjáró hajó, amely a 20. században működött, és a világ egyik legnagyobb hajója volt. A hajó híres volt a luxusáról és a kényelméről.",
    }
    ,{
        id: 76,
        nev:"The Mayflower",
        szin:"fehér",
        kapitany:"Christopher Jones",
        valodi: true,
        leiras:"A Mayflower egy híres hajó, amely az amerikai telepesek számára szállította az első telepeseket az Újvilágba. A hajó híres volt a kalandokról és a felfedező utazásairól.",
    }
    ,{
        id: 45,
        nev:"The Santa Maria",
        szin:"fehér",
        kapitany:"Christopher Columbus",
        valodi: true,
        leiras:"The Santa Maria egy híres hajó, amelyet Christopher Columbus használt az Újvilág felfedezésére és az egyik legismertebb hajó a történelemben. A hajó híres volt a felfedező utazásairól és a kalózkodásról, és az egyik legismertebb hajó a történelemben",
    }
    ,{
        id: 72,
        nev:"The Mary Celeste",
        szin:"fehér",
        kapitany:"Benjamin Briggs",
        valodi: true,
        leiras:"The Mary Celeste egy híres hajó, amelyet Benjamin Briggs vezetett. Szerencsétlenül elhagyott hajóként vált ismertté, és az egyik legismertebb hajó a történelemben. A hajó híres volt a rejtélyes eltűnéséről és a kalózkodásról.",
    }
] 