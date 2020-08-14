Global & Process (vs Window & Document)

Asynchronous, single threaded, event driven, non-blocking

# Express

const express = require('express');
const app = express();

const express = require('express');

const app = express();

**routes**

- Express finds first matching route (will ignore any following matches)

app.get('', (req, res) => {
res.send('Hello express!')
})

**starting up server**

- Starts up server and listens on specific port
- Server started asynchrounously
  app.listen(3000, () => {
  console.log('Server started')
  })

**paths**
\_\_dirname
\_\_filename

path.join(\_\_dirname, '..', '/public'));
