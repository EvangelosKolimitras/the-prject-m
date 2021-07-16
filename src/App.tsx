import { Route, Switch } from 'react-router-dom';
import './App.css';
import { MainHeader } from './components';
import { Christening, Events, FoodPhotography, InteriorPhotography, Landscapes, Portraits, Weddings } from './components/Routes/';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Switch>
          <Route path='/events'> <Events /> </Route>
          <Route path='/weddings'> <Weddings /> </Route>
          <Route path='/christening'> <Christening /> </Route>
          <Route path='/food-photography'> <FoodPhotography /> </Route>
          <Route path='/interior-photography'> <InteriorPhotography /> </Route>
          <Route path='/portraits'> <Portraits /> </Route>
          <Route path='/landscapes'> <Landscapes /> </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
