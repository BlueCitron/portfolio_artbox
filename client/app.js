const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const moment = require('moment')

const app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(morgan('dev'));
// app.use(morgan('common', {
//   stream: fs.createWriteStream(path.join(__dirname, `logs/access_${moment().format('YYYYMMDDHHmmss')}.log`), { flags: 'a' })
// }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('dist'));

app.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}/`)
})
