import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import rederer from './helpers/rederers';
import CreateStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = CreateStore();

  const promises = matchRoutes(Routes,  req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;  
  });

  Promise.all(promises).then(() => {
    res.send(rederer(req, store));
  })

});

app.listen(3000, () =>{
  console.log('Listening on port 3000');
})