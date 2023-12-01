export default function ContactMe() {
  return (
    <section id='Contact' className='contact--section'>
      <div>
        <p className='sub--title'></p>
        <h2>Entre em contato:</h2>
        <p className='text-lg'>Preencha os blocos para mais informações</p>
      </div>
      <form className='contact--form--conteiner'>
        <div className='container'>
          <label htmlFor='first-name' className='contact--label'>
            <span className='text-md'>Nome</span>
            <input
              type='text'
              className='contact--input
                text-md'
              name='first-name'
              id='first-name'
              required
            />
          </label>
          <label htmlFor='last-name' className='contact--label'>
            <span className='text-md'>Sobrenome</span>
            <input
              type='text'
              className='contact--input
                text-md'
              name='last-name'
              id='last-name'
              required
            />
          </label>
          <label htmlFor='email' className='contact--label'>
            <span className='text-md'>Email</span>
            <input
              type='email'
              className='contact--input
                text-md'
              name='email-name'
              id='email-name'
              required
            />
          </label>
          <label htmlFor='phone-number' className='contact--label'>
            <span className='text-md'>Telefone</span>
            <input
              type='number'
              className='contact--input
                text-md'
              name='phone-number'
              id='phone-number'
              required
            />
          </label>
        </div>
        {/* <label htmlFor='choose-topic' className='contact--label'>
          <span className='text-md'>Choose a topic</span>
          <select id='choose-topic' className='contact--input text-md'>
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor='message' className='contact--label'>
          <span className='text-md'>Deixe sua mensagem:</span>
          <textarea
            className='contact--input
                text-md'
            name='message'
            id='message'
            rows='8'
            placeholder='Escreva aqui...'
          />
        </label>
        <label htmlFor='checkbox' className='checkbox--label'>
          <input type='checkbox' required name='checkbox' id='checkbox' />
          <span className='text-sm'>Eu li e aceito os termos.</span>
        </label>
        <div>
          <button
            className='btn btn-primary
            contact--form--btn'
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
