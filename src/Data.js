import React, { useEffect, useState } from 'react';

const Data = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    return (
        <div>
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