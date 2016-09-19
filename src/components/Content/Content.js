import React, {PropTypes} from 'react';
import Accordion from '../Accordion/Accordion';

const Content = () => {

    return (
        <section className="App-section u-floatLeft">
            <Accordion defaultOpenPanel={0} />
        </section>
    );
};

export default Content;
