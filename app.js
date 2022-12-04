// @ts-check

const express = require('express');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/users', (req, res) => {
//   const users = await db.getUsers();
//   res.render('users', { users });
// });

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버 실행 중`);
});
