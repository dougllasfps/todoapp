import React from 'react';
import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends React.Component{

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {description: '', list:[]};
    }

    handleAdd(){
        console.log(this.state.description);
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    
    render(){
        return (
            <div> 
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} 
                          handleChange={this.handleChange}
                          description={this.state.description} />
                <TodoList />
            </div>
        )
    }
}