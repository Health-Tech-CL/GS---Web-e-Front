import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/usuarios?email=${email}`);
        const usuario = response.data[0];

        if (usuario && usuario.senha === senha) {
            navigate('/home');
        } else {
            setErro('Dados Incorretos! Insira novamente.');
        }
        } catch (error) {
        console.error('Erro ao realizar o login:', error);
        setErro('Erro ao realizar o login. Tente novamente mais tarde.');
        }
    };
  
  
    

    return(
            <center>
                <div className='formularioLogin'>
                    <form className='form'>
                        <h1>Login</h1>
                        <div className='emailLogin'>
                            <label>Email:</label>
                            <input type="text"  value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Insira o Email' />
                        </div>
                        <br />
                        <div className="senhaLogin">
                            <label>Senha:</label>
                            <input type="password"  value={senha} name='senha' onChange={(e) => setSenha(e.target.value)} placeholder='Insira a Senha' />
                        </div>
                        <br />
                        <button type='button' className='botaoLogin' onClick={handleSubmit}>Entrar</button>
                        {erro && <div style={{ color: 'red' }}>{erro}</div>}
                    </form>
                </div>
            </center>         
    );

}

export default Login