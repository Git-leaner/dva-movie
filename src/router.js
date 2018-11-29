import React from 'react';
import { Router, Route,IndexRoute, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MoviePage from './pages/movies/MoviePage';
import MovieDetail from './pages/movies/MovieDetail';
import TabBarExample from './pages/tabbar/tabbar';

function RouterConfig({ history }) {
  return (
    <div>
    	<TabBarExample />
	    <Router history={history}>
	      <Switch>
	        <Route path="/" exact component={MoviePage} />
	        <Route path="/movie"  component={MoviePage} />
	        	<Route path="/in_theaters"  component={MoviePage} />
	        	<Route path="/top250"  component={MoviePage} />
	        	<Route path="/coming_soon"  component={MoviePage} />
	        	<Route path="/detail" exact component={MovieDetail} />
	        <Route path="tv" exact component={IndexPage} />
	        	<Route path="tv/tvdetail"  component={IndexPage} />
	      </Switch>
	    </Router>
    </div>
  );
}

export default RouterConfig;
