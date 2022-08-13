import { createContext, useReducer, useContext } from 'react';
import {cartReducer} from './Reducers';
const Cart = createContext();

const courses =[
    {
      "id": 1,
      "name": "Rofik Ahmed",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/1.jpg",
      "prize":10,
      "rating":4.5,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"
    },
    {
      "id": 2,
      "name": "Sultana Nila",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/2.jpg",
      "prize":10,
      "rating":2.5,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"

    },
    {
      "id": 3,
      "name": "kuddus Boyati",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/3.jpg",
      "prize":10,
      "rating":1,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"

    }  ,
    {
      "id": 4,
      "name": "Kabir Ahmed",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/1.jpg",
      "prize":10,
      "rating":2.5,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"
    },
    {
      "id": 5,
      "name": "Riya Akter",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/2.jpg",
      "prize":10,
      "rating":3.5,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"

    },
    {
      "id": 6,
      "name": "Abul Mia",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore debitis nam officiis provident doloremque.",
      "picture":"./img/3.jpg",
      "prize":10,
      "rating":4,
      "rate_given":10000,
      "course_name": "abcesdf asdjhkf jfhd akjsfd kiasjddf kajsb akh",
      "length": "120 hour",
      "lecture": "500 lectures",
      "level": "All level"

    }  
]


const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,{
        courses: courses,
        cart:[]
    });
    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
};

export default Context;
export const CartState=()=>{
    return useContext(Cart);
}