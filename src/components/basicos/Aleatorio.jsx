import React from 'react'

export default props => {
   //const max = props.max;
   //const min = props.min;
   const { min, max } = props;
   const aleatorio = parseInt(Math.random() * (max - min)) + min; 
   return (
        <>
            <h2>Random value between {min} and {max}:</h2>
            <strong>{aleatorio}</strong>
        </>
    )
}