import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const getType = type => {
    if(type === 'default') {
        return `
            padding: 0.9rem;
        `
    }
    if(type === 'primary') {
        return `
            background-color: #4C9CB8;
            padding: 0.9rem;
        `
    } 
    if(type === 'success') {
        return `
            background-color: #509c87;
            padding: 0.9rem;
        `
    }
    if(type === 'danger') {
        return `
            background-color: #ff0052;
            padding: 0.9rem;
        `
    }
    if(type === 'warning') {
        return `
            background-color: #fdeb37;
            padding: 0.9rem;
        `
    } 
}

const getSize = size => {
    if(size === 'xs'){
        return `
            padding: 0.5rem;
        `
    }
    if(size === 'sm'){
        return `
            padding: 0.7rem;
        `
    }
    if(size === 'md'){
        return `
            padding: 0.9rem;
        `
    }
    if(size === 'lg'){
        return `
            padding: 1.1rem;
        `
    }
}

const getRound = round => {
    if(round) {
        return`
            padding: 0.9rem
            border-radius: 0.3rem;
        `
    }
    else {
        return`
            padding: 0.9rem
        `
    }
}

const getColor = color => {
    return`
        color: ${color}
    `
}

const StyledButton = styled.button`
    margin: 0.1rem;
    border: none;
    padding: 0.9rem;
    ${ ({ round }) => getRound(round) }
    ${ ({ type }) => getType(type) }
    ${ ({ size }) => getSize(size) }
    ${ ({ color }) => getColor(color) }
`

const Button = ({type, size, round, color, children}) => (
    <StyledButton 
        type={type} 
        size={size}
        round={round}
        color={color}
    >
        {children}
    </StyledButton>
)

Button.defaultProps = {
    type: 'default',
    size: 'md',
    round: false
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string, 
    round: PropTypes.bool,
    color: PropTypes.string
}

export default Button