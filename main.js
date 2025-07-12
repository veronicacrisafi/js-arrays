const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

//per stampare il valore del quarto insegnante dell'array utilizzo la variabile teachers e sapendo che gli array si contano da 0 utilizzo l'indice [3]
const fourthTeacher = teachers[3];
//stampo in console e il valore è Phil
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// utilizzo splice che aggiunge/rimuove elementi e può sovrascrivere l'array originale, che chiede di sapere il punto di partenza, in questo caso volendo sostituire il 5° insegnante l'indice è 4, poi ci chiede nti elementi deve eliminare in questo caso è 1 e infine ciò con cui deve essere sostituito 'Patrick'
const fifthTeacher = teachers.splice(4, 1, "Patrick");
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
//Per rimuovere l'ultimo elemento dell'array utilizzo la funzionalità pop()
const lastTeacher = teachers.pop();
console.log(lastTeacher);
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = null;

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;
