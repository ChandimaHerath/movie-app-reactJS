import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

const itemsCount = props.itemsCount;
const pageSize = props.pageSize;
const currentPage = props.currentPage;
const pagesCount = Math.ceil(itemsCount/pageSize);
const pages = _.range(1, pagesCount+1);


   
   
   return (<nav>
        <ul className="pagination">
            {pages.map(page=>( <li key={page} className={page === currentPage?"page-item active":"page-item"}  >
                <a  onClick={()=>props.onPageChange(page)}  className="page-link">{page} </a>
                </li>   ))}
                 
        </ul>
    </nav>);
};    
 
export default Pagination; 