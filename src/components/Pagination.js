import React from 'react'

const pagination = ({postPerPage,totalPost, paginate}) => {
    const pageNumber=[]
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <div>
            {pageNumber.map(number=>
                <a onClick={()=>paginate(number)}  href='!#'>{number}</a>)}
            
        </div>
    )
}

export default pagination