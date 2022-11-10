import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";


export const ItemCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { },[count]);

    const sumo = () => {
        setCount(count + 1);
    };
    
    const resto = () => {
        if (count>0)
        setCount(count - 1);
    };

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button onClick={resto} className="botonCount">-</Button>
        <Button className="count">{count}</Button>
        <Button onClick={sumo} className="botonCount">+</Button>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;