

interface Repreoductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reprodutor:Repreoductor={
    volumen: 90,
    segundo: 36,
    cancion: 'Tantas tentaciones',
    detalles:{
        autor: 'YSY A',
        anio: 2015,
    }
};

console.log('El volumen actual es: ', reprodutor.volumen);
console.log('El segundo actual es: ', reprodutor.segundo);
console.log('La canción actual es: ', reprodutor.cancion);
console.log('El autor es: ', reprodutor.detalles.autor);

//desestructuracion de objetos 

const {volumen, segundo, cancion, detalles}=reprodutor;
const {autor:nuevoautor}=detalles;
console.log('El Volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es ', nuevoautor);

//Desestructuracion de arreglos

const dbz:string[]=['Naruto', 'Kabuto', 'Sai'];
const [p1,p2,p3]=dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

const [,,p4]=dbz;
console.log('Personaje 4: ', p4);