import React, { useEffect, useState } from "react";
import './style.scss'
import { ReactComponent as Right } from '../../img/right.svg'
import { ReactComponent as Left } from '../../img/left.svg'


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
        <Left />
      </button>
      {
        pagination.map((page) => (<div key={page} className={curPage === page ? 'currentPage' : 'page'} onClick={() => changeCurPage(page)}>
          {page}
        </div>))
      }

      <button onClick={() => changeCurPage(curPage + 1)} disabled={curPage === pagination[pagination.length-1] ? true : false}>
        <Right/>
      </button>
    </div>
  )

  
}