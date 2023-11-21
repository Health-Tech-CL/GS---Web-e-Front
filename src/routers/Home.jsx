import {} from 'react'

function Home(){
    return(
        <>
        
        <div className='container'>
            <div className="content-banner">
                <img src="./src/assets/imgHome.png" alt="" />

            <div className='contentTitulo'>
                <h1 className='tituloHome'>DoseCerta App</h1>
            </div>


            </div>
            <aside className='secaoHome'>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Administração de remédios</h1>
                        <p className='textosHome'>O esquecimento de remédios prescritos e <br/>controlados 
                        é muito comum, mas nem sempre<br/> ouvimos falar sobre o quão
                        problemático isso é,<br/> e que prejuízos podem acarretar o 
                        paciente em<br/> um período de curto ou longo prazo. É uma 
                        preocupação<br/> significativa para os profissionais da saúde,
                        <br/>visto que o esquecimento na administração de<br/> medicamentos 
                        podem comprometer a eficácia<br/> de remédios resultar em uma 
                        complicação<br/> desnecessária de saúde no paciente
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Nossa Solução</h1>
                        <p className='textosHome'>Nossa solução foi pensada para não haver <br/>
                        mais o esquecimento da administração <br/> de remédios. 
                        Agora será indicado para <br/> os pacientes o Dose Certa 
                        App, o aplicativo <br/> responsável por fornecer o lembrete 
                        dos seus <br/>remédios! Além disso, também daremos um<br/> porta 
                        comprimidos que  possui um sistema de<br/> ESP32, que irá transmitir 
                        um som quando<br/> estiver no horário de tomar o medicamento. 
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Como ela funcionará?</h1>
                        <p className='textosHome'>A lógica do aplicativo foi toda construída em<br/> Python,
                        e o funcionamento central do aplicativo<br/> consiste na 
                        programação dos horários dos<br/>  medicamentos do paciente, 
                        feito pelo médico(a)<br/> ou enfermeiro(a). O sistema, então, 
                        entra em ação,<br/> enviando notificações no momento programado<br/>  
                        para os pacientes, proporcionando-lhes o<br/> lembrete desejado.
                        Dentro do app, também terá<br/> mais informações do remédio que está 
                        sendo<br/> consumido, além das informações prescritas pelo<br/> médico.
                        Já o sistema de ESP32 será construído<br/>  em relação com o Python. 
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