const text =
  "João trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela. Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. Maria, hoje sua esposa ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa maneira que é, nunca esquece seu famoso pão de queijo. Não canso de ouvir a Maria: Joooooooooão, o café tá prontinho aqui. Veeem!";

// Find all occurrences
const regex1 = /João/g;
regex1.test(text); // true

// Find all occurrences both uppercase and lowercase
const regex2 = /João/gi;
regex2.test(text); // true

// Find a group of strings, with optional names
const regex3 = /(Maria|João|Luiz)(, hoje sua esposa)/;
regex3.test(text); // true
