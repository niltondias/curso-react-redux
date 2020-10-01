import React from 'react'
import './Button.css'

export default props => 
<<<<<<< HEAD
<button className='button'>{props.label}</button>

=======
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.operation ? 'operation' : '' }
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
>>>>>>> 32fc4cd7895faba1de564984c97a66e0c1ef653e
