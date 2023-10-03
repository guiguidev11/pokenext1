import Navbar from '/Navbar'
import Footer from '/Footer'

import Head from 'next/head'


export default function Layout ({children}){
    return (
        <>
            <Head>
                <link rel="shortcut icon " href="/images/fiveicon.ico" />
                <title>Pokenext</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )

}