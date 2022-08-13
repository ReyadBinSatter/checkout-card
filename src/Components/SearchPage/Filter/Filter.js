import React, { useEffect, useState } from 'react';
import FilterItem from './FilterItem';
import './Filter.css';

const Filter = () => {
    const [filters, setfilters] = useState([]);

    useEffect(() => {
        fetch('filter.json')
            .then(res => res.json())
            .then(data => setfilters(data))
    }, [])
    return (
        <div className='sidebar'>
           
            {
                filters?.map((filter, index) => <FilterItem
                    key={index}
                    filter={filter} 
                >
                </FilterItem>)
            }
        </div>
    );
};

export default Filter;