import React, { useState } from 'react';
import './Filter.css';
import Check from './check';
import { ChevronDown} from 'react-bootstrap-icons';
const FilterItem = ({ filter }) => {
    const { title, childrens } = filter;
    // const child_title = childrens.map((child,index) => <check key={index} child ={child}><check/>)
    // console.log(child_title)
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={open ? "sidebar-item open border-bottom" : "sidebar-item border-bottom"}>
                <div className="sidebar-title d-flex ">
                    <h5>
                        {title}
                    </h5>
                    <ChevronDown  className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}/>

                </div>

                <div className="sidebar-content">
                    {
                        childrens.map((child,index) => <Check key={index} child ={child}></Check>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FilterItem;