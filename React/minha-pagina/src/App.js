import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div>
      <form action='http://localhost:3000/usuarios' className='formulario'>

        <label htmlFor='nome'>Nome:</label>
        <input type='text' name='nome' placeholder='ex.: João' required />

        <label htmlFor='sobrenome'>Sobrenome:</label>
        <input type='text' name='sobrenome' placeholder='ex.: Silva' required />

        <label htmlFor="idade">Idade</label>
        <input type="number" name="idade" id="idade" min='18' max='99' required/>

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id='email' required />

        <label htmlFor="genero" >Gênero</label>
        <select name="genero" id="genero">
          <option value="">--</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <label htmlFor="idioma">Qual seu idioma preferido?</label>
        <div name='idioma' className='idioma' id='idioma'>

          <input type="radio" name='idioma' value="pt-br" id='pt-br' />
          <label htmlFor="pt-br">Português - BR</label>

          <input type="radio" name='idioma' value="en" id='en'/>
          <label htmlFor="en">Inglês</label>

          <input type="radio" name='idioma' value="es" id='es'/>
          <label htmlFor="es">Espanhol</label>

          <input type="radio" name='idioma' value="outro" id='outro'/>
          <label htmlFor="outro">Outro </label>

        </div>

        <input type='submit' value="Enviar" />

      </form>
      <UserList />
    </div>
  );
}

export default App;
