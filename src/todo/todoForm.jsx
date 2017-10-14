import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeDescription} from './todoActions'

const TodoForm = props => (
    <div role='form' className='todoForm'>
        <div className='row'>
            <Grid cols='10'>
                <input id='description' 
                    value={props.description} 
                    onChange={props.changeDescription}
                    className='form-control' 
                    placeholder='Adicione uma Tarefa' />
            </Grid>
            <Grid cols='2'>
                <IconButton btnClass='primary' iconClass='plus' onClick={props.handleAdd} />
            </Grid>
        </div>
    </div>
)

const mapStateToProps = state => ({
    description : state.todo.description 
})

const mapDispatchToProps = dispatch => 
bindActionCreators({ changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)