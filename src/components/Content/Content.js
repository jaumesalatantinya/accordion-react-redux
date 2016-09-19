import React, {PropTypes} from 'react';
import Accordion from '../Accordion/Accordion';

const Content = ({errors}) => {

    if (errors.length===0){
        return (
            <section className="App-section u-floatLeft">
                <Accordion defaultOpenPanel={0} />
            </section>
        );
    }
    else {
        return (
            <section className="u-error">{errors[0].message}</section>
        );
    }
};

export default Content;
