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
//ho usato il ciclo for per verificare gli elementi all'interno dell'array
for (let i = 0; i < teachers.length; i++) {
  const isTeachersEmpty = teachers[i];
  console.log(isTeachersEmpty);
}
