import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users () {
    const [users, setUsers] = useState([])

    useEffect(() => {
       axios.get('http://localhost:3500')
       .then(result => setUsers(result.data))
       .catch(err => console.log(err))
    
    }, [])

    const handleDelete = (id) => {
      axios.delete('http://localhost:3500/deleteUser/'+id)
      .then(res => {console.log(res)
        window.location.reload()})
      .catch(errr => console.log(errr))
    }

  return (
    <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className='btn btn-success'>Add +</Link>
           <table className='table'>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  { 
                       users.map((user) => {
                       return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.ge}</td>
                            <td>
                            <Link to={`/Update/${user._id}`} className='btn btn-success'>Update</Link>
                                <button className='btn btn-danger' 
                                onClick={(e) => handleDelte(user._id)}>Delete</button>
                            </td>
                        </tr>
                       }) 
                  }
              </tbody>
           </table>
        </div>
      </div>
  )
}

export default Users; 