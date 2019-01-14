import React from 'react'
import '../styles/list.css'

const InlineList = ({ children, style}) => (
    <ul style={style} className='inline'>
        {children.map((child, index) => {
            return (<>
                {child}
                {children.length - 1 !== index && " • "}
            </>)
        })}
    </ul>
)

export default InlineList;