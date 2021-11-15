import React from 'react';
const Pagination = (props) => {
const itemsCount = props.itemsCount;
const pageSize = props.pageSize;

const pagesCount = itemsCount/pageSize;
console.log(pagesCount);

   
   
   return (<nav>
        <ul className="pagination">
            <li className="page-item"><a href="google.lk" className="page-link">{pagesCount} </a></li>
        </ul>
    </nav>);
};    
 
export default Pagination; 