import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Christening } from './components/Routes/Christening/Christening';
import { Events } from './components/Routes/Events/Events';
import { FoodPhotography } from './components/Routes/FoodPhotography/FoodPhotography';
import { InteriorPhotography } from './components/Routes/InteriorPhotography/InteriorPhotography';
import { Portraits } from './components/Routes/Portraits/Portraits';
import { Weddings } from './components/Routes/Weddings/Weddings';
import { Title } from './components/Title/Title';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/events'> <Events /> </Route>
        <Route path='/weddings'> <Weddings /> </Route>
        <Route path='/christening'> <Christening /> </Route>
        <Route path='/food-photography'> <FoodPhotography /> </Route>
        <Route path='/interior-photography'> <InteriorPhotography /> </Route>
        <Route path='/portraits'> <Portraits /> </Route>
      </Switch>
      <Title />
    </div>
  );
}

export default App;
