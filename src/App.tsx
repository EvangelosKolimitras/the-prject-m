import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Bio } from './components/Bio/Bio';
import { Description } from './components/Description/Description';
import { MainHeader } from './components/MainHeader/MainHeader';
import { BusinessPorfolio } from './components/Routes/BusinessPortfolio/BusinessPortfolio';
import { Christening } from './components/Routes/Christening/Christening';
import { Events } from './components/Routes/Events/Events';
import { FoodPhotography } from './components/Routes/FoodPhotography/FoodPhotography';
import { InteriorPhotography } from './components/Routes/InteriorPhotography/InteriorPhotography';
import { Landscapes } from './components/Routes/Landscapes/Landscapes';
import { Portraits } from './components/Routes/Portraits/Portraits';
import { Weddings } from './components/Routes/Weddings/Weddings';
import { Title } from './components/Title/Title';

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
          <Route path='/business-portfolio'> <BusinessPorfolio /> </Route>
        </Switch>
        <Title />
        <Description />
        <Bio />
      </main>
    </div>
  );
}

export default App;
