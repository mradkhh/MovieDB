import React, {FC, memo, useContext, useState} from 'react';
import cl from './Form.module.scss'
import Container from "components/Container/Container";
import {Context} from "pages/_app";

interface FormProps {

}

const { store } = useContext(Context)

const Form: FC<FormProps> = ({  }) => {

    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    return (
        <Container id="/form">
            <button onClick={() => store.login(email, password)} >Login</button>
            <button onClick={() => store.registration(email, password)} >Registration</button>
            <button onClick={() => store.logout()} >Logout</button>
        </Container>
    );
};

export default memo(Form);