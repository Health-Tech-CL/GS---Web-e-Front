import {} from 'react';
import {useNavigate} from 'react-router';

function Home(){

    const navigate = useNavigate();

    const handleLogout = () =>{
        sessionStorage.removeItem('usuarioAutenticado');
        navigate('/');
    }

    return(
        <>
        
        <div className='container'>
            <div className="content-banner">
                <img src="./src/assets/imgHome.png" alt="" />
                <div className='conteudoBanner'>
                    <div className='contentTitulo'>
                        <h1 className='tituloHome'>DoseCerta App</h1>
                    </div>
                    
                    <div className='fraseHome'>
                        <p className='fraseHomeTexto'>Com o DoseCerta App, nos comprometemos em oferecer soluções<br/>  inovadoras
                        para transformar a gestão de medicamentos em uma<br/> experiência simples, segura e eficaz.</p>
                    </div>
                </div>
                <div className='logoutHome'>
                    <button className='botaologoutHome' onClick={handleLogout}>Logout</button>
                </div>
                
                
            </div>
            <aside className='secaoHome'>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Administração de Remédios</h1>
                        <p className='textosHome'>O esquecimento de remédios prescritos e controlados 
                        é muito comum, mas nem sempre ouvimos falar sobre o quão
                        problemático isso é,e que prejuízos podem acarretar o 
                        paciente em um período de curto ou longo prazo. É uma 
                        preocupação significativa para os profissionais da saúde,
                        visto que o esquecimento na administração de medicamentos 
                        podem comprometer a eficácia de remédios resultar em uma 
                        complicação desnecessária de saúde no paciente
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Nossa Solução</h1>
                        <p className='textosHome'>Nossa solução foi pensada para não haver 
                        mais o esquecimento da administração de remédios. 
                        Agora será indicado para os pacientes o DoseCerta 
                        App, o aplicativo responsável por fornecer o lembrete 
                        dos seus remédios! Além disso, também daremos um porta 
                        comprimidos que  possui um sistema de ESP32, que irá transmitir 
                        um som quando estiver no horário de tomar o medicamento. 
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Como Ela Funcionará?</h1>
                        <p className='textosHome'>O aplicativo DoseCerta, construído em Python,simplifica a administração de medicamentos.
                        Os horários são programados pelo profissional de saúde,
                        e as notificações são enviadas aos pacientes para garantir lembretes.Além disso,
                        o app fornece informações detalhadas sobre cada medicamento.
                        O sistema ESP32 é integrado de forma sinérgica, aprimorando a eficiência da comunicação
                        com a plataforma Python e garantindo uma experiência integrada para o usuário.
                        </p>
                        <p></p>
                    </div>
                </article>
            </aside>
            
        </div>
    
        <h1 className='tituloSolto'>Vantagens</h1>
        <div className='container'>
            <section className='diferenciaisHome'>
                <article>
                    <img src="./src/assets/lampada.png" alt="" />
                    <div>
                        <h1 className='subtitulosHomeDif'>Lembretes Personalizados</h1>
                        <p className='textosHomeDif'>Lembretes inteligentes e personalizados. 
                        Reduzindo significativamente o risco de esquecimentos e garantindo
                        uma adesão consistente ao tratamento.</p>
                        <p></p>
                    </div>
                </article>
                <article>
                    <img src="./src/assets/celular.png" alt="" />
                    <div>
                        <h1 className='subtitulosHomeDif'>Interface Intuitiva</h1>
                        <p className='textosHomeDif'>Intuitivo e fácil de navegar. Adequado para 
                        usuários de todas as idades, independentemente do nível de familiaridade
                        com tecnologia.</p>
                        <p></p>
                    </div>
                </article>
                <article>
                    <img src="./src/assets/comprimido.png" alt="" className='pilula' />
                    <div>
                        <h1 className='subtitulosHomeDif'>Informações Detalhadas</h1>
                        <p className='textosHomeDif'>Informações abrangentes sobre cada medicamento 
                        cadastrado. Promove a compreensão do tratamento e conhecimento sobre seus 
                        medicamentos</p>
                        <p></p>
                    </div>
                </article>
            </section>
        </div>
        </>
    )
}
export default Home