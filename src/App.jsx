import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages
import Home from './pages/Home';
import PartCss from './pages/PartCss';
import PartJs from './pages/PartJs';
import PartPhp from './pages/PartPhp';
import PartSql from './pages/PartSql';
import PartMongo from './pages/PartMongo';
import PartNodeJs from './pages/PartNodeJs';
import Error from './pages/Error';

// subcat
import MediumPHP from './pages/medium/MediumPHP';

// Components
import Navbar from './components/layouts/navbar/Navbar';


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/part-css" component={PartCss}/>
        <Route path="/part-javascript" component={PartJs} />
        <Route path="/part-php" component={PartPhp} />
        <Route path="/part-sql" component={PartSql} />
        <Route path="/part-mongo" component={PartMongo} />
        <Route path="/part-nodeJs" component={PartNodeJs} />

        <Route path="/intermediaire/php-intermediaire" component={MediumPHP} />

        <Route component={Error}/>
      </Switch>
    </Router>
  )
}

export default App;
