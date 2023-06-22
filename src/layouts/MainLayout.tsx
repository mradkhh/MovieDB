import React, {FC, memo, ReactNode} from 'react';
import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

interface MainLayoutProps {
    children: ReactNode,
    title: string,
    description: string,
    mainClass: string
}

const MainLayout: FC<MainLayoutProps> = memo(({ children, title, description, mainClass }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header/>
            <main className={mainClass}>
                {children}
            </main>
            <Footer/>
        </>
    );
});

export default MainLayout;