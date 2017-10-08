import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <IconButton btnClass='danger' iconClass='trash-o' onClick={ () => props.handleRemove(todo)} />
                </td>
            </tr>
        ))        
    }

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
