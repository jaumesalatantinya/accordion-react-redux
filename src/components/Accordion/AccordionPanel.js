import React, {PropTypes} from 'react';

const AccordionPanel = ({id, content, isCurrent, changeCurrentPanel}) => {

    return (
        <div className="Accordion-panel">
            <dt
                className="Accordion-header"
                onClick={(e) => {  e.preventDefault(); changeCurrentPanel(id); }}>
                {content.header}
            </dt>
            <dd
                className={'Accordion-content' + ((isCurrent) ? ' is-open': ' is-close')}>
                {content.content}
            </dd>
        </div>
    );
};

export default AccordionPanel;
