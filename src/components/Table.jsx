import React from 'react'

const Table = ({data}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Fact</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((entry, index) => (
                    <tr key = {index}>
                        <td>{entry.date}</td>
                        <td>{entry.title}</td>
                        <td>{entry.explanation}</td>
                    </tr>
                ))}
            </tbody>

        </table>

    )
}

export default Table;
