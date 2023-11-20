import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/usuarios?email=${email}`);
        const usuario = response.data[0];
  
        if (usuario && senha) {
          navigate('/home');
        } else {
          alert('Dados Incorretos! Insira novamente.');
        }
      } catch (error) {
        console.error('Erro ao realizar o login:', error);
      }
    };
  
    

    return(
        <div className='formularioLogin'>
            <h1>Login</h1>
                <form>
                    <label>Email:</label>
                    <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Senha:</label>
                    <input type="password" value={senha} name='senha' onChange={(e) => setSenha(e.target.value)} />
                    <br />
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                </form>
        </div>
    );

}

export default Login