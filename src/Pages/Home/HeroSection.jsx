export default function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
      <div className='hero--section--content--box'>
        <div className='hero--section--content'>
          <p className='section--title'>Seu nome</p>
          <h1 className='hero--section-title'>
            Escreva aqui a
            <br />
            <span className='hero--section--title--color'>
              {' '}
              área em que trabalha{' '}
            </span>
          </h1>
          <p className='hero--section-description'>
            Escreva uma breve descição sobre sua formação, seu trabalho atual ou
            sobre algo que esteja procurando.
          </p>
        </div>
        <button className='btn btn-primary'>Get In Touch</button>
      </div>
      <div className='hero--section--img'>
        <img src='./img/hero_img.png' alt='Hero Section' />
      </div>
    </section>
  );
}
