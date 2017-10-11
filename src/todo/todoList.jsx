import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? 'maskedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton btnClass='success' hide={todo.done}
                                iconClass='check' onClick={ () => props.handleMaskAsDone(todo)} />
                    <IconButton btnClass='warning'  hide={!todo.done}
                                iconClass='undo' onClick={ () => props.handleMarkAsPending(todo)} />
                    <IconButton btnClass='danger' hide={todo.done}
                                iconClass='trash-o' onClick={ () => props.handleRemove(todo)} />
                </td>
            </tr>
        ))        
    }

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
