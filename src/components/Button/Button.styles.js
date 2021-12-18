import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    margin: 20px auto;
    
    :hover {
        opacity: 0.8;
    }

`;