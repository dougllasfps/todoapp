import React from 'react';
import {connect} from 'react-redux'

class Field extends React.Component{

    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input type='text' value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        label: state.label.value
    }
}

export default connect(mapStateToProps)(Field)