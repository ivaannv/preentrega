import { useState } from "react";

const ItemCount = ()=>{
    const [contador, setcontador] = useState (1)
    const incrementar = ()=>{
        if(contador<10){
            setcontador (contador + 1);

        }
    }
    const decrementar = ()=>{
        if(contador>1){
            setcontador (contador -1)
        }
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>

        </div>
    )
}

export default ItemCount
