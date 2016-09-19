import React, {PropTypes} from 'react';

const AccordionPanel = ({section, isCurrent, changeCurrentPanel}) => {

    return (
        <div className="Accordion-panel">
            <dt
                className="Accordion-header"
                onClick={(e) => {  e.preventDefault(); changeCurrentPanel(section.id); }}>
                {section.header}
            </dt>
            <dd
                className={'Accordion-content' + ((isCurrent) ? ' is-open': ' is-close')}>
                {section.content}
            </dd>
        </div>
    );
};

export default AccordionPanel;
