import './content.scss'


export default function Content() {

  return (
    <div className="wrapper">
      <div className='inner-content'>
        <div className='right-block'>
          <section className='dots'>
            <img src="/img/vector.png" alt="dots"/>
          </section>

          <section className='content-block'>
            <h1>Shop</h1>

            <section>
              <span className='maintext blacktext'>Home</span>
              <span className='maintext redtext'>Shop</span>
            </section>
          </section>

          <section className='line'>

          </section>

        </div>

        <div className='left-block'>
          <img src="/img/bg.png" alt="bg" />

        </div>
      </div>
  </div>
  )
}