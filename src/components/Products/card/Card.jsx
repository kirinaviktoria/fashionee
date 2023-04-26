import { useState } from 'react'
import './style.scss'



export default function Card({product}) {

  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(!like);
  }


  return (
    <section className='card'>
      <div className='item-image'>

          <img className='image' src={ product.image } alt="item"/>

        {
          (product.isSale || product.isNew) && <div className='item-status'>
          { product.isSale && <svg className='sale' width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="45" height="20" fill="#FF8E8E"/>
          <path d="M14.94 8.98C14.92 8.94667 14.85 8.89667 14.73 8.83C14.61 8.75667 14.46 8.68 14.28 8.6C14.1 8.52 13.9033 8.45 13.69 8.39C13.4767 8.33 13.2633 8.3 13.05 8.3C12.77 8.3 12.5533 8.35 12.4 8.45C12.2467 8.54333 12.17 8.69 12.17 8.89C12.17 9.05 12.2267 9.17667 12.34 9.27C12.46 9.36333 12.63 9.44667 12.85 9.52C13.07 9.58667 13.34 9.66667 13.66 9.76C14.1133 9.88 14.5067 10.0267 14.84 10.2C15.1733 10.3667 15.4267 10.5833 15.6 10.85C15.78 11.1167 15.87 11.47 15.87 11.91C15.87 12.31 15.7967 12.65 15.65 12.93C15.5033 13.2033 15.3033 13.4267 15.05 13.6C14.8033 13.7667 14.52 13.89 14.2 13.97C13.88 14.0433 13.55 14.08 13.21 14.08C12.8633 14.08 12.5067 14.0467 12.14 13.98C11.78 13.9067 11.4333 13.8067 11.1 13.68C10.7667 13.5467 10.46 13.3867 10.18 13.2L10.9 11.77C10.9267 11.8033 11.0133 11.8667 11.16 11.96C11.3067 12.0467 11.4867 12.14 11.7 12.24C11.92 12.3333 12.1633 12.4167 12.43 12.49C12.6967 12.5633 12.9667 12.6 13.24 12.6C13.5333 12.6 13.75 12.5533 13.89 12.46C14.0367 12.3667 14.11 12.2367 14.11 12.07C14.11 11.89 14.0333 11.75 13.88 11.65C13.7333 11.55 13.53 11.46 13.27 11.38C13.0167 11.3 12.7233 11.21 12.39 11.11C11.9567 10.9767 11.5967 10.8267 11.31 10.66C11.03 10.4933 10.82 10.29 10.68 10.05C10.5467 9.81 10.48 9.51 10.48 9.15C10.48 8.65 10.5967 8.23 10.83 7.89C11.07 7.54333 11.39 7.28333 11.79 7.11C12.19 6.93 12.6267 6.84 13.1 6.84C13.4333 6.84 13.7533 6.88 14.06 6.96C14.3733 7.04 14.6633 7.14 14.93 7.26C15.2033 7.38 15.4467 7.5 15.66 7.62L14.94 8.98ZM18.4563 6.9H20.2263L22.6663 14H20.9863L20.4363 12.41H18.2263L17.6863 14H16.0063L18.4563 6.9ZM20.1663 11.28L19.3363 8.55L18.4863 11.28H20.1663ZM23.3655 14V6.9H25.0055V12.56H28.4455V14H23.3655ZM34.2052 12.56V14H29.2152V6.9H34.1152V8.34H30.8552V9.72H33.6552V11.05H30.8552V12.56H34.2052Z" fill="white"/>
          </svg> }

          { product.isNew && <svg className='new' width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="45" height="20" fill="#95CCB5"/>
          <path d="M12.32 9.94V14H10.68V6.9H11.98L15.27 11.08V6.9H16.91V14H15.57L12.32 9.94ZM23.2579 12.56V14H18.2679V6.9H23.1679V8.34H19.9079V9.72H22.7079V11.05H19.9079V12.56H23.2579ZM26.5942 6.91H28.1042L28.8442 9.18L29.5842 6.91H31.1042L29.8942 10.21L30.6142 12.1L32.3942 6.9H34.1842L31.4142 14H29.9942L28.8442 11.22L27.7042 14H26.2742L23.5142 6.9H25.2942L27.0842 12.1L27.7842 10.21L26.5942 6.91Z" fill="white"/>
          </svg> }
        </div>
        }

        <button onClick={() => handleClick() } className='like'>

          {!like && <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5429 0.406215C12.1901 0.138034 12.8838 0 13.5844 0C14.285 0 14.9787 0.138034 15.626 0.406215C16.2732 0.674397 16.8613 1.06747 17.3565 1.56298C17.8519 2.05821 18.2449 2.64618 18.513 3.2933C18.7812 3.94053 18.9193 4.63426 18.9193 5.33486C18.9193 6.03545 18.7812 6.72918 18.513 7.37641C18.2449 8.02359 17.8519 8.6116 17.3564 9.10685C17.3564 9.10689 17.3563 9.10693 17.3563 9.10698L9.98974 16.4735C9.84909 16.6142 9.65832 16.6932 9.45941 16.6932C9.2605 16.6932 9.06973 16.6142 8.92908 16.4735L1.56241 9.10685C0.562016 8.10646 0 6.74963 0 5.33486C0 3.92008 0.562017 2.56325 1.56241 1.56286C2.56281 0.562462 3.91964 0.000445664 5.33441 0.000445664C6.74918 0.000445604 8.10601 0.562462 9.10641 1.56286L9.45941 1.91586L9.81229 1.56298C10.3076 1.06747 10.8956 0.674397 11.5429 0.406215ZM13.5844 1.5C13.0809 1.5 12.5822 1.59921 12.117 1.79197C11.6518 1.98472 11.2292 2.26725 10.8732 2.62339L10.8731 2.62352L9.98974 3.50685C9.84909 3.6475 9.65832 3.72652 9.45941 3.72652C9.2605 3.72652 9.06973 3.6475 8.92908 3.50685L8.04575 2.62352C7.32665 1.90443 6.35136 1.50045 5.33441 1.50045C4.31746 1.50045 3.34216 1.90443 2.62307 2.62352C1.90398 3.34261 1.5 4.31791 1.5 5.33486C1.5 6.3518 1.90398 7.3271 2.62307 8.04619L9.45941 14.8825L16.2957 8.04619L16.2959 8.04607C16.652 7.69009 16.9345 7.26742 17.1273 6.80222C17.3201 6.33702 17.4193 5.83841 17.4193 5.33486C17.4193 4.8313 17.3201 4.33269 17.1273 3.86749C16.9345 3.40229 16.652 2.97962 16.2959 2.62364L16.2956 2.62339C15.9396 2.26725 15.517 1.98472 15.0518 1.79197C14.5866 1.59921 14.088 1.5 13.5844 1.5Z" fill="#444444"/>
            </svg>
          }         

          {
            like && <svg width="19" height="17" viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5429 0.406215C12.1901 0.138034 12.8838 0 13.5844 0C14.285 0 14.9787 0.138034 15.626 0.406215C16.2732 0.674397 16.8613 1.06747 17.3565 1.56298C17.8519 2.05821 18.2449 2.64618 18.513 3.2933C18.7812 3.94053 18.9193 4.63426 18.9193 5.33486C18.9193 6.03545 18.7812 6.72918 18.513 7.37641C18.2449 8.02359 17.8519 8.6116 17.3564 9.10685C17.3564 9.10689 17.3563 9.10693 17.3563 9.10698L9.98974 16.4735C9.84909 16.6142 9.65832 16.6932 9.45941 16.6932C9.2605 16.6932 9.06973 16.6142 8.92908 16.4735L1.56241 9.10685C0.562016 8.10646 0 6.74963 0 5.33486C0 3.92008 0.562017 2.56325 1.56241 1.56286C2.56281 0.562462 3.91964 0.000445664 5.33441 0.000445664C6.74918 0.000445604 8.10601 0.562462 9.10641 1.56286L9.45941 1.91586L9.81229 1.56298C10.3076 1.06747 10.8956 0.674397 11.5429 0.406215ZM13.5844 1.5C13.0809 1.5 12.5822 1.59921 12.117 1.79197C11.6518 1.98472 11.2292 2.26725 10.8732 2.62339L10.8731 2.62352L9.98974 3.50685C9.84909 3.6475 9.65832 3.72652 9.45941 3.72652C9.2605 3.72652 9.06973 3.6475 8.92908 3.50685L8.04575 2.62352C7.32665 1.90443 6.35136 1.50045 5.33441 1.50045C4.31746 1.50045 3.34216 1.90443 2.62307 2.62352C1.90398 3.34261 1.5 4.31791 1.5 5.33486C1.5 6.3518 1.90398 7.3271 2.62307 8.04619L9.45941 14.8825L16.2957 8.04619L16.2959 8.04607C16.652 7.69009 16.9345 7.26742 17.1273 6.80222C17.3201 6.33702 17.4193 5.83841 17.4193 5.33486C17.4193 4.8313 17.3201 4.33269 17.1273 3.86749C16.9345 3.40229 16.652 2.97962 16.2959 2.62364L16.2956 2.62339C15.9396 2.26725 15.517 1.98472 15.0518 1.79197C14.5866 1.59921 14.088 1.5 13.5844 1.5Z" fill="#FF8E8E"/>
            </svg>
          }
        </button>
      </div>

      <div className='card-info'>
        <p className='item-name'>
          {product.name}
        </p>

        <div className='prices'>
          <p className='current-price'>${product.price}</p>
          { product.oldPrice && <p className='old-price'>${ product.oldPrice }</p> }
        </div>
      </div>
      
    </section>
  )
}