import React from 'react'
import {ButtonTag} from './Gallery.styled';

const TagButton = ({ name, handleSetTag }) => {
    return (
        <ButtonTag onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </ButtonTag>
    )
}

export default TagButton;
