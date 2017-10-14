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
        this.handleMaskAsDone = this.handleMaskAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.refresh();
    }

    handleMaskAsDone(todo){
        axios.put(`${SERVICE_BASE_URL}?id=${todo.id}`,{...todo, done: true})
            .then(resp => this.refresh());
    }

    handleMarkAsPending(todo){
        axios.put(`${SERVICE_BASE_URL}?id=${todo.id}`,{...todo, done: false})
        .then(resp => this.refresh());
    }

    refresh(){
        axios.get(SERVICE_BASE_URL)
        .then( resp => {
            this.setState({list: resp.data})
        });
    }

    handleAdd(){
        const description = this.state.description;
        axios.post(SERVICE_BASE_URL, {description})
                    .then(resp =>  this.refresh());
    }

    handleRemove(todo){
        axios.delete(`${SERVICE_BASE_URL}?id=${todo.id}`)
            .then(resp => this.refresh() );
        
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
                <TodoList handleRemove={this.handleRemove}
                          handleMaskAsDone={this.handleMaskAsDone}
                          handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}