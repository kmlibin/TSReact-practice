import React from 'react'

//styles
import PizzaCSS from './Pizza.module.css'

//describe the pizza object
interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

//describe the props as an interface
interface Props {
    pizza: Pizza;
}

const Pizza: React.FC<Props> = ({pizza}) => {
    return (
    <li className={PizzaCSS.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
    </li>
    );
};

export default Pizza;