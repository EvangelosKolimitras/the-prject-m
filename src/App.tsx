import { Redirect, Route, RouteProps, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { MainHeader } from './components';
import { EnterButton } from './components/EnterButton/EnterButton';
import { WelcomePage, Christening, Events, FoodPhotography, InteriorPhotography, Landscapes, Portraits, Weddings } from './routes/';

function App<T extends Partial<RouteProps>>(props: T) {
  const h = useHistory();

  return (
    <div className="App">
      {
        ['/welcome', '/'].every((el) => h.location.pathname !== el) && <MainHeader />
      }
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/welcome' ></Redirect>
          </Route>
          <Route exact path='/welcome'> <WelcomePage /> </Route>
          <Route path='/events'> <Events /> </Route>
          <Route path='/weddings'> <Weddings /> </Route>
          <Route path='/christening'> <Christening /> </Route>
          <Route path='/food-photography'> <FoodPhotography /> </Route>
          <Route path='/interior-photography'> <InteriorPhotography /> </Route>
          <Route path='/portraits'> <Portraits /> </Route>
          <Route path='/landscapes'> <Landscapes /> </Route>
        </Switch>
      </main>
      <EnterButton />
    </div>
  );
}

export default App;
