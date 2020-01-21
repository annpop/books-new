import React from 'react'
import { Table, Button } from 'react-bootstrap'
import './BookList.css'

const BookList = ({ books }) => {
    
    return (
        <div className='book-list'>
           <Table responsive>
            <thead>
           <tr>
                <th></th>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Rating</th>
                <th>Rate</th>
            </tr>
            </thead>
            {books.map((book) => {
                return(
                    <tbody>
                    <tr>
                        <th><input type='checkbox'></input></th>
                        <th>{book.id}</th>
                        <th>{book.title}</th>
                        <th>{book.description}</th>
                        <th><Button type='button' variant='btn btn-primary btn-space'>Edit</Button></th>
                        <th><Button type='button' variant='btn btn-danger btn-space'>Delete</Button></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </tbody>
                )
            })}
           </Table>
        </div>
    )
}

export default BookList 