import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { MDBContainer } from 'mdbreact';
 
const PaginationCust = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i);   
    }
    return(
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first onClick={() => paginate(1)} />
                </PaginationItem>
                    {pageNumber.map(number => (
                        <PaginationItem key={number} >
                            <PaginationLink onClick={() => paginate(number)} >
                                {number} 
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                <PaginationItem>
                    <PaginationLink last onClick={() =>paginate(pageNumber.length)} />
                </PaginationItem>
            </Pagination>
    )
}
export default PaginationCust;
