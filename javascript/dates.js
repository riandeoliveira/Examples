const currentDate = new Date(); // 2022-09-18T13:47:44.139Z
const date = new Date(2022, 08, 18, 10, 50, 20, 300); // 2022-09-18T13:50:20.300Z

date.getDate(); // 18
date.getDay(); // 0
date.getFullYear(); // 2022
date.getHours(); // 10
date.getMilliseconds(); // 300
date.getMinutes(); // 50
date.getMonth(); // 8 (september)
date.getSeconds(); // 20
date.getTime(); // 1663509020300
date.toDateString(); // Sun Sep 18 2022
date.toLocaleDateString(); // 18/09/2022 -> pt-BR (Brazil)
date.toLocaleString(); // 18/09/2022 10:50:20 -> pt-BR (Brazil)
date.toString(); // Sun Sep 18 2022 10:50:20 GMT-0300 (Horário Padrão de Brasília)
date.toTimeString(); // 10:50:20 GMT-0300 (Horário Padrão de Brasília)
