import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Layouts Custom</title>
            </Head>
            <Navbar />
            <Sidebar />
        </>
    )
}
