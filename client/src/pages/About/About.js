import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

function About() {
  return (
    <Fragment>
      <Header />
      <Link to="/">
        Back to home page
      </Link>
      <p>
        This is about page.
      </p>
    </Fragment>
  );
}

export default About;
