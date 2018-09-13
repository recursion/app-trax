/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import ApplicationManager from 'containers/ApplicationManager/Loadable';
import ApplicationForm from 'containers/ApplicationForm';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Job Application Tracking Made Simple!"
      defaultTitle="App-Trax"
    >
      <meta name="description" content="Easily manage your job search progress." />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={ApplicationManager} />
      <Route path="/applications/create" component={ApplicationForm} />
      <Route
        path="/applications/edit/:id"
        render={(props) => {
          console.log(props)
          return <ApplicationForm id={props.match.params.id} />;
        }}
      />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
