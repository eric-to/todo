import React from 'react';

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function TodoHeader() {
  const now = new Date();
  const day = DAYS[now.getDay()];
  const month = MONTHS[now.getMonth()];
  const date = now.getDate();

  return (
    <header className="card card-header">
      <strong>{`${day}`}</strong><strong> , </strong>&nbsp;{month} {date}
    </header>
  );
}

export default TodoHeader;
