import React from 'react'
import { Wrapper } from './Header.styles'

export default function Header({ handleChange, handleSubmit }) {
    return (
        <Wrapper>
            <h1>React Photo Search</h1>
            <input type="text" name="image" placeholder="Search for images" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Search</button>
        </Wrapper>
    )
}