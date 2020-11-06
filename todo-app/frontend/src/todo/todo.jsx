import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Form />
                <List />
            </div>
        )
    }
}