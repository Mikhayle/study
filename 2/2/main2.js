let firstYear;
do{
  firstYear = parseInt( prompt('Введите начальный год') );
} while ( (!isNaN(parseFloat(firstYear)) && isFinite(firstYear)) === false);

let lastYear;
do{
  lastYear = parseInt( prompt('Введите конечный год') );
} while ( (!isNaN(parseFloat(lastYear)) && isFinite(lastYear)) === false);

if (firstYear > lastYear) {
  let template = firstYear;
  firstYear = lastYear;
  lastYear = template;
}

  while (firstYear <= lastYear) {

      if (firstYear % 4 === 0 || firstYear % 100 === 0 && firstYear % 400 === 0) {
        console.log(firstYear);
        firstYear++;
      }
      firstYear++;
  };
