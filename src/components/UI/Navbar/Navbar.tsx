import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Navbar.module.scss'
import Dropdown from "components/UI/Dropdown/Dropdown";

const films = [
    { value: 1, title: 'Tarjima kinolar' },
    { value: 2, title: 'Premyera' },
    { value: 3, title: 'Hind kinolar' },
    { value: 4, title: 'Multfilmlar' },
]

const genre = [
    { value: 1, title: 'Sarguzasht' },
    { value: 2, title: 'Melodramma' },
    { value: 3, title: 'Komediya' },
    { value: 4, title: 'Tarixiy' },
    { value: 5, title: 'Klassika' },
    { value: 6, title: 'Fantastika' },
    { value: 7, title: 'Hayotiy' },
    { value: 8, title: 'Dramma' },
    { value: 9, title: 'Qo\'rqinchli' },
]

const year = [
    { value: 1, title: '2022' },
    { value: 2, title: '2021' },
    { value: 3, title: '2020' },
    { value: 4, title: '2019' },
    { value: 5, title: '2018' },
    { value: 6, title: '2017' },
    { value: 7, title: '2016' },
    { value: 8, title: '2015' },
    { value: 9, title: '2014' },
    { value: 10, title: '2013' },
    { value: 11, title: '2012' },
]

const Navbar: FC = memo(() => {
    return (
        <nav className={cl.Root}>
            <ul className={cl.List}>
                <li>
                    <A href='/'>Bosh sahifa</A>
                </li>
                <Dropdown items={films}>Kinolar</Dropdown>
                <li>
                    <A href='/serial'>Seriallar</A>
                </li>
                <Dropdown items={genre}>Janr</Dropdown>
                <Dropdown items={year}>Yil</Dropdown>
                <li>
                    <A href='/konsert'>Konsert</A>
                </li>
                <li>
                    <A href='/treiler'>Treyler</A>
                </li>
            </ul>
        </nav>
    );
});

Navbar.displayName = 'Navbar'

export default Navbar;