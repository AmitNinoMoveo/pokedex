import React from 'react'
import '../style/search.css';
import { useDispatch } from 'react-redux'
import { allPokemonSearchAction } from '../../../features/AllPokemon/state/actions'
import ButtonComponent from '../../ButtonComponent/components/Button'
import { searchSetOnChangeAction } from '../state/actions'

const SearchComponent = () => {

    const dispatch = useDispatch();
    
    return (
        <div className="search-container">
            <input type="text" onChange={(e)=>dispatch(searchSetOnChangeAction(e.target.value))} />
            <ButtonComponent func={()=>{dispatch(allPokemonSearchAction())}} txt={'Search'} />
        </div>
    )
}

export default SearchComponent
