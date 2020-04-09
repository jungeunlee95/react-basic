import React from 'react';
import { Table } from 'react-bootstrap';

const BoardList = (props) => {
    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th>#</th>
                <th>id</th>
                <th>title</th>
                <th>content</th>
            </tr>
            </thead>
            <tbody>
            {props.boards.map(( listValue, index ) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{listValue.board_id}</td>
                        <td>{listValue.title}</td>
                        <td>{listValue.content}</td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
};

export default BoardList;