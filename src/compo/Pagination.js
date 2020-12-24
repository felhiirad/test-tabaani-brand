import React from 'react'


// j utilisé le bootstrap pour obtenire la form de la pagination

 const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);

    }



    return (
        <nav>
            <ul className='pagination'>
                {pageNumber.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={()=>paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>

                    </li>
                ))}
            </ul>
            
        </nav>
    )
}
export default Pagination;
