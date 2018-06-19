import React from 'react';

import Modal1 from './Modal1';
import Modal2 from './Modal2';

import '../styles/Main.scss';

const Main = () => {

	return (
    <main role="main" className="inner cover">
            <h1 className="cover-heading">A better way to enjoy every day.</h1>
            <p className="lead">Be the first to know when we launch.</p>
            <div className="lead">
              <Modal1 />
              <Modal2 />
            </div>
    </main>
	);
};

export default Main;
