import React from 'react'
import { Wrapper } from './Card.styles'

export default function Card({ imgId, imgSrc, imgAlt, imgUser, imgLikes }) {
    return (
        <Wrapper key={imgId}>
            <img src={imgSrc} alt={imgAlt} />
            <p>Photo by {imgUser}</p>
            <p>👍 {imgLikes}</p>
        </Wrapper>
    )
}