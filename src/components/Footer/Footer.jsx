import { ReactComponent as FooteLeft } from '../../img/footer-left.svg';
import { ReactComponent as FooteRight } from '../../img/footer-right.svg';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Send } from '../../img/send.svg';
import { ReactComponent as Visa } from '../../img/visa.svg';
import { ReactComponent as MasterCard } from '../../img/mastecard.svg';
import { ReactComponent as PayPal } from '../../img/paypal.svg';
import { ReactComponent as Payoneer } from '../../img/payoneer.svg';
import './style.scss'


export default function Footer() {


  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <div className='footer'>
          <div className="image-left"> <FooteLeft className='footer-left'/> </div>


          <div className="footer-inner">
            <div className='footer-columns'>
              <div className='footer-content'>
                <div className='first-line'>
                  <Logo />
                  <p>Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.</p>
                </div>

                <div className='second-line'>
                  <h4 className='fontJ'>Find us here:</h4>
                  <div className='find-list'>
                    <p className='font12'>FB</p>
                    <p className='font12'>TW</p>
                    <p className='font12'>INS</p>
                    <p className='font12'>PT</p>
                  </div>
                </div>
              </div>

              <div className='footer-content'>
                <h4 className='fontJ'>About</h4>
                <ul>
                  <li>About us</li>
                  <li>Collections</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>

              </div>

              <div className='footer-content'>
                <h4 className='fontJ'>Useful Links</h4>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of use</li>
                  <li>Support</li>
                  <li>Shipping details</li>
                  <li>FAQs</li>
                </ul>

              </div>

              <div className='footer-content'>
                <h4 className='fontJ'>Newsletter</h4>

                <p>Subscribe to be the first to hear about deals,  offers and upcoming collections.</p>

                <div className='textbox'> 
                  <input placeholder='Enter your email' />
                  <span className='icon-send'> <Send /> </span>
                </div>

              </div>
            </div>

            <div className='rights'>
              <p>
                © All right reserved. Fashionee 2020
              </p>
              <div className='payment'>
                <p>Payment methods:</p>
                <Visa />
                <MasterCard />
                <PayPal />
                <Payoneer />

              </div>

            </div>
          </div>


          <div className="image-right"> <FooteRight className='footer-right'/> </div>
        </div>


      </div>

    </div>

  )
}