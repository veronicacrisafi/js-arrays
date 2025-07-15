const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

//per stampare il valore del quarto insegnante dell'array utilizzo la variabile teachers e sapendo che gli array si contano da 0 utilizzo l'indice [3]
const fourthTeacher = teachers[3];
//stampo in console e il valore è Phil
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// utilizzo splice che aggiunge/rimuove elementi e può sovrascrivere l'array originale, che chiede di sapere il punto di partenza, in questo caso volendo sostituire il 5° insegnante l'indice è 4, poi ci chiede nti elementi deve eliminare in questo caso è 1 e infine ciò con cui deve essere sostituito 'Patrick'
teachers.splice(4, 1, "Patrick");
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
//Per rimuovere l'ultimo elemento dell'array utilizzo la funzionalità pop() non necessita di inserire l'elemento nelle parentesi prende direttamente l'ultimo elemento
const lastTeacher = teachers.pop();
console.log(lastTeacher);
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
//Per rimuovere  il primo elemento dell'array utilizzo la funzionalità shift() non necessita di inserire l'elemento nelle parentesi prende direttamente il primo elemento
const firstTeacher = teachers.shift();
console.log(firstTeacher);
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
// per aggiungere un insegnante alla fine dell'array utilizzo push inserendo nelle parentesi l'elemento da aggiungere
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
// per aggiungere un elemento all'inizio dell'array utulizzo unshift inserendo nelle parentesi l'elemento da aggiungere
teachers.unshift("Sarah");
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
//per trovare l'indice di un array uso indexOf e all'interno delle parentesi inserisco il nome dell'elemento per la quale mi serve sapere il valore dell'indice
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
//uso length per cercare all'interno dell'array se sia vuota o piena e utilizo === 0 per confrontare se la lunghezza dell'array è 0

const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty);

//BONUS
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// per invertire l'ordine degli elementi dell'array ho usato la dot notation reverse
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// uso il ciclo for per cercare i nomi con lunghezza maggiore o uguale a 5 caratteri  lascando il nuovo array vuoto e che verrà riempito con i nomi che hanno questa caratteristica
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// ho cercato il valore dell'indice tramite indexOf
const ed_index = teachers.indexOf("Ed");
//uso splice per rimuovere l'elemento Ed
teachers.splice(ed_index, 1);
console.log(teachers);
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let isFabioPresent = null;

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher === "Fabio") {
    isFabioPresent = true;
    break;
  }
}
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// per unire tutti gli insegnanti in una stringa uso la dot notation join(' qui decido se nella stringa devono essere separati dalla virgola ,  oppure dal trattino  - ')
const teachersString = teachers.join(" , ");
console.log(teachersString);
