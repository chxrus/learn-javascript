let animals = ['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК'];

let formatter = Intl.Collator();
animals.sort((a, b) => formatter.compare(a, b));
// animals.sort((a, b) => a.localeCompare(b));

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК
