// import style from './App.module.css'
import { Menu } from './components/menu'
import { cards } from './assets/mock/card'
import { useState } from 'react'

function App() {
  const defaultPhoneNumber = "5541999999999"

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
      <Menu option01='Sessão 01' option02='Sessão 02' option03='contato'/>
      <main>
        <section id='s1'>
          <h2>sessao 1</h2>
          {cards.map((item, index) => {
            return(
              <div key={index}>
                <h5>{item.text}</h5>
                <p>{item.maiscoisa}</p>
                <img src={item.img} alt={item.text} width={200} height={"auto"}/>
              </div>
            )
          }
          )}
        </section>
        <section id='s2'>
          <h2>CONTATO</h2>
          <br />
          <input placeholder='insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
          <input placeholder='insira seu email' type="text" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
          <textarea placeholder='insira a mensagem' type="text" id='message' name='message' value={formData.message} onChange={handleChange} cols={30} rows={10} required/>
          <button onClick={handleZap}>Enviar Mensagem</button>
        </section>
      </main>
    </>
  )
}

export default App
