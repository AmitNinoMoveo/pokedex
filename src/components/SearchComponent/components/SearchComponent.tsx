import React from 'react'
import '../style/search.css';
import { useDispatch, useSelector } from 'react-redux'
import { allPokemonSearchAction } from '../../../features/AllPokemon/state/actions'
import ButtonComponent from '../../ButtonComponent/components/Button'
import { searchSetOnChangeAction } from '../state/actions'
import { RootState } from '../../../state/store';

const SearchComponent = () => {

    const dispatch = useDispatch();
    const searchInputValue = useSelector((state: RootState)=>state.searchState);

    return (
        <div className="search-container">
            <input type="text" value={searchInputValue} onChange={(e)=>dispatch(searchSetOnChangeAction(e.target.value))} />
            <ButtonComponent func={()=>{dispatch(allPokemonSearchAction())}} txt={'Search'} />
        </div>
    )
}

export default SearchComponent
