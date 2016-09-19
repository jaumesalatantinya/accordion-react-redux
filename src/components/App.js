import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as errorsActions from '../actions/errorsActions';

import Header from './Header/Header';
import Content from './Content/Content';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';


class App extends React.Component {

    constructor (props, context){
        super(props, context);
    }

    render () {
        return (
            <div className="App">
                <Header />
                <Content errors={this.props.errors}/>
                <Aside />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        errors: state.errors
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(errorsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
