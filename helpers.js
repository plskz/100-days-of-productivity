const user = {
  name: 'Zai Santillan',
  github: 'plskz',
  start: '6/1/2022',
};

// --------  IGNORE BELOW  --------
import { exec } from 'child_process';

const RED = '\x1b[31m%s\x1b[0m';
const GREEN = '\x1b[32m%s\x1b[0m';

const weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const pad = (x, y = 3) => x.toString().padStart(y, '0');
export const error = (msg) => console.log(RED, msg);
export const success = (msg) => console.log(GREEN, msg);

export const open = (path) => {
  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`);
    if (stderr) return console.log(`stderr: ${stderr}`);
    // console.log(`stdout: ${stdout}`);
    success(`\n\topening ${path}`);
  });
};

// -------------------------------------------------------------

let d = new Date();

switch (process.argv[2]) {
  case 'prev':
    const prev = new Date(d.getTime());
    prev.setDate(d.getDate() - 1);
    d = prev;
    break;
  case 'next':
    const next = new Date(d.getTime());
    next.setDate(d.getDate() + 1);
    d = next;
    break;
}

const month = d.getMonth();
const day = d.getDate();
const year = d.getFullYear();

const CURRENT = `${month + 1}/${day}/${year}`;

const weekName = weeks[d.getDay()];
const monthName = months[month];

export const diff = Math.floor((Date.parse(CURRENT) - Date.parse(user.start)) / 86400000) + 1;
export const [prevDay, nextDay] = [diff - 1, diff + 1];

export const currentDayChallenge = `Day ${diff}`;
export const currentDate = `${monthName} ${day}, ${year} - ${weekName}`;
export const today = `\n\t\t${currentDayChallenge}\n\t${currentDate}\n`;

export const header = `<div align="center">
  <h1>Round 1</h1>
  <p>${currentDayChallenge}</p>
  <sub>
    Author: <a href="https://github.com/${user.github}" target="_blank">${user.name}</a>
    <br>
    <small>${currentDate}</small>
  </sub>
</div>`;

export const content = `### Today's Progress:\n\n- TODO\n\n### Notes:\n\n- TODO\n\n### Thoughts:\n\n- TODO\n\n### Resources:\n\n- TODO`;

export const footer = `[<< Day ${prevDay}](day${pad(prevDay)}.md) | [Day ${nextDay} >>](day${pad(nextDay)}.md)`;

export const template = `${header}\n\n${footer}\n\n${content}\n\n${footer}\n`;
