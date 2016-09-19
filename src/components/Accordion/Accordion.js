import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sectionsActions from '../../actions/sectionsActions';
import AccordionPanel from './AccordionPanel';

class Accordion extends React.Component {

    constructor (props){
        super(props);
        this.changeCurrentPanel = this.changeCurrentPanel.bind(this);
        this.state = {currentPanel: props.defaultOpenPanel};
    }

    changeCurrentPanel (newCurrentPanelId) {
        this.setState({currentPanel: newCurrentPanelId});
    }

    render () {
        const {sections} = this.props;
        let panels;
        if (sections) {
            console.log(sections);
            panels = sections.map((section) => {
                let isCurrent = ( this.state.currentPanel === section.id ) ? true : false;
                return (
                    <AccordionPanel
                        key={section.id}
                        section={section}
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
        sections: state.sections
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(sectionsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
