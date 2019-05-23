 document.querySelector('#container').append(createCalendar('cal', 2000, 1));

function createCalendar(id, year, month) {
  const table = document.createElement('table');
  table.id = id;
  const thead = document.createElement('thead'); 
  const tbody = document.createElement('tbody');
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', "вс"];

  const trForThead = document.createElement('tr');


  for (let day in days) {
    const th = document.createElement('th');
    th.innerHTML = days[day];
    trForThead.append(th);
  }

  thead.append(trForThead);

  table.append(thead);

  const date = new Date(year, month - 1);
  let firstDay = date.getDay();
  firstDay === 0 ? 6 : firstDay;
  
  const dayInMonth = getDaysInMonth(year, month);
  let dayToAdd = 1 - firstDay;

  while (dayToAdd <= dayInMonth) {
    const week = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const day = document.createElement('td');
      if (dayToAdd > 0 && dayToAdd <= dayInMonth) {
        day.innerHTML = [dayToAdd];
      }
      dayToAdd++
      week.append(day);
    }
    tbody.append(week);
  }
  table.append(tbody);
  return table;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
