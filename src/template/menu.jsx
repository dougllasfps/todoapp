import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-calendar-check-o'></i>TodoApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                    <li><a href='#/desenvolvedor'>Portfólio</a></li>
                    <li><a href='#/contato'>Contato</a></li>
                    <li><a href='#/desenvolvedor'>Configurações
                    </a></li>
                    <li><a href='#/desenvolvedor'>Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
)