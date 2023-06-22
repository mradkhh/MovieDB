import React, {FC, memo} from 'react';
import Container from "components/Container/Container";
import Logo from "components/UI/Logo/Logo";
import SearchField from "components/UI/Inputs/SearchField";
import Navbar from "components/UI/Navbar/Navbar";
import cl from './Header.module.scss'

const Header: FC = memo(() => {
    return (
        <Container id='header'>
            <div className={cl.Root}>
                <Logo/>
                <Navbar/>
                <SearchField/>
            </div>
        </Container>
    );
});

Header.displayName = 'Header'

export default Header;