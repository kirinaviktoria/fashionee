import React, { useEffect, useState } from "react";
import './style.scss'


export default function Pagination({totalPages, curPage, changeCurPage}) {
  const [pagination, setPagination] = useState([])
   

  useEffect(() => {
    const tempPagination = []

    for (let i = 0; i < totalPages; i ++) {
      tempPagination.push(i + 1)
    }

    setPagination(tempPagination)
  }, [totalPages])


  return (
    <div className='pagination'>
      <button onClick={() => changeCurPage(curPage - 1)} disabled={curPage === pagination[0] ? true : false}>
        <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.5962 0.989593 6.5962 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.5962 10.5355 6.5962 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM51 6.75H1V5.25H51V6.75Z" fill="black"/>
        </svg>
      </button>
      {
        pagination.map((page) => (<div key={page} className={curPage === page ? 'currentPage' : 'page'} onClick={() => changeCurPage(page)}>
          {page}
        </div>))
      }

      <button onClick={() => changeCurPage(curPage + 1)} disabled={curPage === pagination[pagination.length-1] ? true : false}>
        <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z" fill="black"/>
        </svg>
      </button>
    </div>
  )

  
}