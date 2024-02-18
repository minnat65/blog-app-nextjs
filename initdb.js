import sql from 'better-sqlite3';
// import { data } from '../data.js';

const db = sql('blogs.db');

const data = [
   {
     author: 'Minnat Ali',
     title: 'Title 1',
     content: `Here's a block of text from a blog post that isn't conveniently three lines long like you designed
     for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
     things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
     wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
     SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
     your cousin went to high school with before the show starts, and you're gonna miss it if you're
     not there early.`,
   },
   {
     author: 'Alii Ali',
     title: 'Title 2',
     content: `Here's a block of text from a blog post that isn't conveniently three lines long like you designed
     for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
     things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
     wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
     SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
     your cousin went to high school with before the show starts, and you're gonna miss it if you're
     not there early.`,
   },
   {
     author: 'Alii Ali',
     title: 'Title 3',
     content: `Here's a block of text from a blog post that isn't conveniently three lines long like you designed
     for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
     things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
     wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
     SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
     your cousin went to high school with before the show starts, and you're gonna miss it if you're
     not there early.`,
   },
   {
     author: 'Alii Ali',
     title: 'Title 4',
     content: `Here's a block of text from a blog post that isn't conveniently three lines long like you designed
     for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
     things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
     wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
     SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
     your cousin went to high school with before the show starts, and you're gonna miss it if you're
     not there early.`,
   },
 ]

db.prepare(`
   CREATE TABLE IF NOT EXISTS blogs (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       content TEXT NOT NULL,
       author TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO blogs VALUES (
         null,
         @title,
         @content,
         @author
      )
   `);

  for (const blog of data) {
    stmt.run(blog);
  }
}

initData();