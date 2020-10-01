import React from 'react'
import DiretaFilho from './DiretaFilho'

export default prpos => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />
            <DiretaFilho nome="Maria" idade={17} nerd={false} />
        </div>
    )
}