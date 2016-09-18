import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accordionActions from '../../actions/accordionActions';
import AccordionPanel from './AccordionPanel';

class Accordion extends React.Component {

    constructor (props){
        super(props);
        this.changeCurrentPanel = this.changeCurrentPanel.bind(this);
    }

    changeCurrentPanel (newCurrentPanelId) {
        this.props.actions.changeCurrentPanel(newCurrentPanelId);
    }

    render () {
        const {content, currentPanel} = this.props;
        let panels;
        if (content) {
            panels = content.map((c) => {
                let isCurrent = ( currentPanel === c.id ) ? true : false;
                return (
                    <AccordionPanel
                        key={c.id}
                        id={c.id}
                        content={c}
                        isCurrent={isCurrent}
                        changeCurrentPanel={this.changeCurrentPanel}
                    />
                );
            });
            return (
                <dl className="Accordion">
                    {panels}
                </dl>
            );
        }
        else {
            return (<div />);
        }
    }
}

function mapStateToProps (state, ownProps) {
    return {
        content: state.accordion.content,
        currentPanel: state.accordion.currentPanel
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(accordionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
