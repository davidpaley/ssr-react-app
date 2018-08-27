import express from 'express';
import rederer from './helpers/rederers';

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(rederer(req));
});

app.listen(3000, () =>{
  console.log('Listening on port 3000');
})