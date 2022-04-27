import React, { useEffect, useState } from 'react';

const Data = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    const handleAddUser = event=>{
        event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const user = {name, email};
        console.log(name, email);
        //send data/ post data// 
        fetch('http://localhost:5000/user', {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name' placeholder='name' required />
                    <input type="text" name='email' placeholder='email' required/>
                    <input type="submit" value='Add User' />
                </form>
            </div>
            <h1>My Own Data: {users.length} </h1>
          <div>
              {
                  users.map(user=>
                      <h3 key={user.id}> Id: {user.id} name: {user.name}</h3>
                  )
              }
          </div>

        </div>
    );
};

export default Data;