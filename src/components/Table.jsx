import React from 'react'
import {Link} from 'react-router-dom'

const Table = ({data}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Fact</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((entry, index) => (
                    <tr key = {index}>
                        <td>{entry.date}</td>
                        <td>{entry.title}</td>
                        <td>{entry.explanation}</td>
                        <td>
                        <Link to={`/${entry.date}`}>🔗</Link>
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>

    )
}

export default Table;
