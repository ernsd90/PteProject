        
import React, { useEffect } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const maxPageNumbersToShow = 5; // Maximum number of page numbers to display
    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
    const pageNumbers = [];
    
    let startPage = Math.max(1, currentPage - halfMaxPageNumbersToShow);
    let endPage = Math.min(totalPages, currentPage + halfMaxPageNumbersToShow);

    // Adjust startPage and endPage if they are out of bounds
    if (currentPage - startPage < halfMaxPageNumbersToShow) {
        endPage = Math.min(totalPages, endPage + (halfMaxPageNumbersToShow - (currentPage - startPage)));
    }
    if (endPage - currentPage < halfMaxPageNumbersToShow) {
        startPage = Math.max(1, startPage - (halfMaxPageNumbersToShow - (endPage - currentPage)));
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    
    return (
        <div className="row g-1">

            <div className="col-lg-12">
            <nav>
                <ul className="rbt-pagination justify-content-end">
                    <li className={currentPage === 1 ? 'disabled' : ''}>
                    <a
                        href="#"
                        aria-label="Previous"
                        onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) onPageChange(currentPage - 1);
                        }}
                    >
                        <i className="feather-chevron-left"></i>
                    </a>
                    </li>
                    {pageNumbers.map((number) => (
                    <li key={number} className={number === currentPage ? 'active' : ''}>
                        <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(number);
                        }}
                        >
                        {number}
                        </a>
                    </li>
                    ))}
                    <li className={currentPage === totalPages ? 'disabled' : ''}>
                    <a
                        href="#"
                        aria-label="Next"
                        onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) onPageChange(currentPage + 1);
                        }}
                    >
                        <i className="feather-chevron-right"></i>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>

        </div>
    );
};

export default Pagination;
