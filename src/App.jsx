import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages
import Home from './pages/Home';
import PartCss from './pages/PartCss';
import PartJs from './pages/PartJs';
import PartPhp from './pages/PartPhp';
import PartSql from './pages/PartSql';

import Error from './pages/Error';

// medium
import MediumCSS from './pages/medium/MediumCSS';
import MediumJS from './pages/medium/MediumJS';
import MediumPHP from './pages/medium/MediumPHP';
import MediumSQL from './pages/medium/MediumSQL';

// advanced 
import AdvancedPHP from './pages/advanced/AdvancedPHP';
import AdvancedCSS from './pages/advanced/AdvancedCSS';
import AdvancedJS from './pages/advanced/AdvancedJS';
// Components
import Navbar from './components/layouts/navbar/Navbar';


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/base-css" component={PartCss}/>
        <Route path="/base-javascript" component={PartJs} />
        <Route path="/base-php" component={PartPhp} />
        <Route path="/base-sql" component={PartSql} />
        <Route path="/php-intermediaire" component={MediumPHP} />
        <Route path="/css-intermediaire" component={MediumCSS} />
        <Route path="/js-intermediaire" component={MediumJS} />
        <Route path="/sql-intermediaire" component={MediumSQL} />
        <Route path="/scss" component={AdvancedCSS} />
        <Route path="/js-avancer" component={AdvancedJS} />
        <Route path="/php-avancer" component={AdvancedPHP} />
        <Route component={Error}/>
      </Switch>
    </Router>
  )
}

export default App;
