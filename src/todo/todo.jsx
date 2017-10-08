import React from 'react';
import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const SERVICE_BASE_URL = 'http://localhost:8080/api/tasks';


export default class Todo extends React.Component{

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {description: '', list:[]};
        this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.refresh();
    }

    refresh(){
        axios.get(SERVICE_BASE_URL)
        .then( resp => {
            this.setState({list: resp.data})
            console.log(this)
        } );
    }

    handleAdd(){
        const description = this.state.description;
        axios.post(SERVICE_BASE_URL, {description})
                    .then(resp => console.log(resp.data));
        this.refresh();
    }

    handleRemove(todo){
        axios.delete(`${SERVICE_BASE_URL}?id=${todo.id}`)
            .then(resp => console.log('removed') );
        this.refresh()
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
                <TodoList list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}