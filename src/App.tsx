import { Route, RouteProps, Switch } from 'react-router-dom';
import './App.css';
import { MainHeader } from './components';
import { WelcomePage, Christening, Events, Food, Interior, Landscapes, Portraits, Weddings } from './routes/';

function App<T extends Partial<RouteProps>>(props: T) {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Switch>
          <Route exact path='/welcome'> <WelcomePage /> </Route>
          <Route path='/events'> <Events /> </Route>
          <Route path='/weddings'> <Weddings /> </Route>
          <Route path='/christening'> <Christening /> </Route>
          <Route path='/food'> <Food /> </Route>
          <Route path='/interior'> <Interior /> </Route>
          <Route path='/portraits'> <Portraits /> </Route>
          <Route path='/landscapes'> <Landscapes /> </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
