import style from './App.module.css'
import { Menu } from './components/menu'
import { cards } from './assets/mock/card'
import { projetos } from './assets/mock/projeto'
import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {
  const defaultPhoneNumber = "5541998245828"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome.%20${name}%0D%0A
    Email.%20${email}%0D%0A
    Message.%20${message}%0D%0A`

    window.open(urlZAPZAP, "_blank")
  }

  return (
    <>
      <Menu option01='Portfolio' option02='Projetos' option03='Contato' option04='Mapa'/>
      <main>
        <section id='s1' className={style.s1}>
        <h2 class={style.name}>Portfolio </h2>
          <p class={style.palavra}>Sou Leonardo, tenho 20 anos, moro em Curitiba e sou um futuro Dev que está buscando em aprender 
            e se aprimorar no Front e Backend. Atualmente curso Técnico de Desenvolvimento de Sistemas no Senai e Ciência
            da Computação na Unicuritiba.</p>
           <p class={style.palavra}>Abaixo está as linguagens e tecnologias que utilizo para programação.</p>
           <div className={style['cards-container']}>
          {cards.map((item, index) => {
            return(
              <div key={index}>
                <h5 className={style.title}>{item.text}</h5>
                <p>{item.maiscoisa}</p>
                <img src={item.img} alt={item.text} width={200} height={"auto"} className={style.cards}/>
              </div>
            )
          }
          )}
          </div>
          <p class={style.palavra}>Meu objetivo é sempre estar me aprimorando constantemente nos conceitos de orientação de objetos
            e aprender mais sobre Java, Banco de Dados e dominar as tecnologias predominantes no mercado como o React para ingressar
            sem dificuldades.</p>
        </section>
        <section id='s2' className={style.s2}>
        <h2 class={style.name}>MEUS PROJETOS</h2>
        {projetos.map((item, index) => {
            return(
              <div key={index}>
                <h5 className={style.title}>{item.text}</h5>
                <p>{item.maiscoisa}</p>
                <img src={item.img} alt={item.text} width={200} height={"auto"} className={style.cards2}/>
                {item.link && (
                  <button onClick={() => window.open(item.link, '_blank')} className={style.button}>
                    Ver Projeto
                  </button>
                )}
              </div>
            )
          })}
        </section>
        <section id='s3' className={style.s3}>
          <h2>CONTATO</h2>
          <br />
          <input placeholder='Insira Seu Nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
          <input placeholder='Insira Seu Email' type="text" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
          <textarea placeholder='Insira Sua Mensagem' type="text" id='message' name='message' value={formData.message} onChange={handleChange} cols={30} rows={10} required/>
          <button onClick={handleZap}>Enviar Mensagem</button>
        </section>
        <footer className={style.footer}>
        <div className={style.socialIcons}>
        <a href="https://github.com/Leonardolima1356" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://br.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        </div>
      </footer>
      </main>
    </>
  )
}

export default App
