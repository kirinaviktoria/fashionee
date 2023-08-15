import './style.scss'

export default function Content() {

  return (
    <div className="wrapper">
      <div className='inner-content'>
        <div className='right-block'>
          <section className='dots'/>
          <section className='content-block'>
            <section className='inner-text'>
              <h1>Shop</h1>
              <section>
                <span className='maintext blacktext'>Home</span>
                <span className='maintext redtext'>Shop</span>
              </section>
            </section>
          </section>
        </div>

        <div className='left-block'>
          <img src="/img/bg.png" alt="bg" />
        </div>
      </div>
  </div>
  )
}