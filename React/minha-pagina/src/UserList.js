import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Nome: </strong>
              {user.nome}
              <br />
              <strong>Sobrenome: </strong>
              {user.sobrenome}
              <br />
              <strong>Idade: </strong>
              {user.idade}
              <br />
              <strong>E-mail: </strong>
              {user.email}
              <br />
              <strong>Gênero: </strong>
              {user.genero}
              <br />
              <strong>Idioma: </strong>
              {user.idioma}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
