import React, {useState, useEffect, useRef} from 'react';

// Controlled component: component contolled by react

// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);


    // triggers on initial render
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        // callback below will be run before SearchBar re-renders 
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'></img>
                <input 
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;