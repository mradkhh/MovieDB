import React, {FC, memo, useState} from 'react';
import cl from './styles/SearchField.module.scss'
import {useFetchSearchByTitleMutation} from "services/services";
import {useRouter} from "next/router";

const SearchField: FC = memo(() => {

    const [ search, setSearch ] = useState<string>('')

    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(`/search/${search}`)
    }


    return (
        <div className={cl.Root}>
            <form onSubmit={handleClick}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Film izlash...'/>
            </form>
            <span onClick={handleClick} className={cl.Icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.90039" cy="9.8999" r="9" stroke="#51526C" strokeWidth="1.5"/>
                    <path d="M16.5 16.5L22.864 22.864" stroke="#51526C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
    );
});

SearchField.displayName = 'SearchField'

export default SearchField;