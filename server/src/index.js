import 'babel-polyfill';
import express from 'express';
import rederer from './helpers/rederers';
import CreateStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = CreateStore();
  res.send(rederer(req, store));
});

app.listen(3000, () =>{
  console.log('Listening on port 3000');
})