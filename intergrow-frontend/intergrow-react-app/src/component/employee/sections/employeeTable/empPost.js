import React from 'react';
 
const EmpPosts = ({posts, loading}) =>{
    if (loading) {
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <tbody>
            {posts.map(employee => (
                // <li key={post.id} className='list-group-item'>{post.first_name}</li>
                <tr key={employee.id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{employee.employee_id}</td>
                    <td className="pt-3-half" >{employee.first_name}</td>
                    <td className="pt-3-half" >{employee.email}</td>
                    <td className="pt-3-half" >{employee.phone_number}</td>
                    <td className="pt-3-half">
                        <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0">Edit</button></span>
                    </td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}
export default EmpPosts;
