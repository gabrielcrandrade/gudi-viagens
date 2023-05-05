import "../styles/components/contact.sass"

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-title">Fale Conosco</h2>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input className="contact-form-input" type="email" placeholder="Digite seu melhor email" />
        <input className="contact-form-input" type="text" placeholder="Assunto" />
        <textarea className="contact-form-textarea" placeholder="Escreva sua mensagem"></textarea>
        <button className="btn">Enviar</button>
      </form>
    </section>
  )
}

export default Contact