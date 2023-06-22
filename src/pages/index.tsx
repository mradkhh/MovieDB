import type { NextPage } from 'next'
import MainLayout from "layouts/MainLayout";
import Home from "components/Pages/Home";

const Index: NextPage = () => {
  return (
    <MainLayout title={'Home'} description={'Uzmovi tarjima kinolar portali'} mainClass={'main_home'}>
        <Home/>
    </MainLayout>
  )
}

export default Index
