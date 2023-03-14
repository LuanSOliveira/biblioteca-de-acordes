export interface IAcordes{
    nome: string;
    notas: {
        casa: number;
        pestana: number[];
        p: number;
        s: number;
        t: number;
        q: number;
    };
}

export const acordeC: IAcordes[] = [
    {
        nome: 'C',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 42, t: 53, q: 0}
    },
    {
        nome: 'Cm',
        notas: {casa: 0, pestana: [13,23,33,43,53,0], p: 0, s: 24, t: 45, q: 35}
    },
    {
        nome: 'C#',
        notas: {casa: 4, pestana: [11,21,31,41,51,0], p: 0, s: 43, t: 33, q: 23}
    },
    {
        nome: 'C#m',
        notas: {casa: 4, pestana: [11,21,31,41,51,0], p: 0, s: 22, t: 43, q: 33}
    },
    {
        nome: 'C7',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 42, t: 53, q: 33}
    },
    {
        nome: 'C#7',
        notas: {casa: 4, pestana: [11,21,31,41,51,0], p: 0, s: 43, t: 0, q: 23}
    },
    {
        nome: 'C#m7',
        notas: {casa: 4, pestana: [11,21,31,41,51,0], p: 0, s: 22, t: 43, q: 0}
    },
    {
        nome: 'C9',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 42, s: 53, t: 23, q: 0}
    },
    {
        nome: 'C7M',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 42, s: 53, t: 0, q: 0}
    },
    {
        nome: 'C5',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 53, s: 0, t: 45, q: 35}
    },
    {
        nome: 'C/D',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 0, t: 0, q: 0}
    },
    {
        nome: 'C/E',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 42, t: 53, q: 0}
    },
    {
        nome: 'C/G',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 42, t: 63, q: 53}
    },
]

export const acordeD: IAcordes[] = [
    {
        nome: 'D',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 32, s: 12, t: 23, q: 0}
    },
    {
        nome: 'Dm',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 11, s: 32, t: 23, q: 0}
    },
    {
        nome: 'D#',
        notas: {casa: 6, pestana: [11,21,31,41,51,0], p: 0, s: 43, t: 33, q: 23}
    },
    {
        nome: 'D#m',
        notas: {casa: 6, pestana: [11,21,31,41,51,0], p: 0, s: 22, t: 43, q: 33}
    },
    {
        nome: 'D7',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 21, s: 32, t: 12, q: 0}
    },
    {
        nome: 'Dm7',
        notas: {casa: 5, pestana: [11,21,31,41,51,0], p: 0, s: 0, t: 22, q: 43}
    },
    {
        nome: 'D#m7',
        notas: {casa: 5, pestana: [12,22,32,42,52,0], p: 0, s: 0, t: 23, q: 44}
    },
    {
        nome: 'D7M',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 32, t: 22, q: 12}
    },
    {
        nome: 'D4',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 32, s: 23, t: 13, q: 0}
    },
    {
        nome: 'Db',
        notas: {casa: 4, pestana: [11,21,31,41,51,0], p: 0, s: 43, t: 33, q: 23}
    },
    {
        nome: 'D/C',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 32, s: 12, t: 53, q: 23}
    },
    {
        nome: 'D/F#',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 62, s: 32, t: 12, q: 23}
    },
]

export const acordeE: IAcordes[] = [
    {
        nome: 'E',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 31, s: 52, t: 42, q: 0}
    },
    {
        nome: 'Em',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 52, t: 42, q: 0}
    },
    {
        nome: 'E7',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 31, s: 52, t: 42, q: 23}
    },
    {
        nome: 'Em7',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 52, t: 42, q: 23}
    },
    {
        nome: 'E4',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 52, t: 42, q: 32}
    },
    {
        nome: 'Eb',
        notas: {casa: 6, pestana: [11,21,31,41,51,0], p: 0, s: 43, t: 33, q: 23}
    },
    {
        nome: 'Ebm7',
        notas: {casa: 5, pestana: [12,22,32,42,52,0], p: 0, s: 0, t: 23, q: 44}
    },
    {
        nome: 'E7M',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 42, s: 34, t: 24, q: 14}
    },
    {
        nome: 'E/G#',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 42, s: 64, t: 34, q: 25}
    },
]

export const acordeF: IAcordes[] = [
    {
        nome: 'F',
        notas: {casa: 0, pestana: [11,21,31,41,51,61], p: 0, s: 32, t: 53, q: 43}
    }
]

export const acordeG: IAcordes[] = [
    {
        nome: 'G',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 52, s: 63, t: 23, q: 13}
    }
]

export const acordeA: IAcordes[] = [
    {
        nome: 'A',
        notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 42, t: 32, q: 22}
    }
]

export const acordeB: IAcordes[] = [
    {
        nome: 'B',
        notas: {casa: 0, pestana: [12,22,32,42,52,0], p: 0, s: 44, t: 34, q: 24}
    }
]
