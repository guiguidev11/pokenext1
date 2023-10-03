import Link from 'next/link'
import Image from 'next/image'



export default function Navbar() {
    return(
        <nav>
            <div>
                < image 
                src="/images/pokeboll.png"
                width="30" 
                heigth="30"
                alt="Pokenext" 
                />
                <h1>Pokenext</h1>
            </div>
            <ul>
                <li>
                    <link href="/">
                        <a>Home</a>
                    </link>
                </li>
                <li>
                    <link href="/about">
                        <a>Sobre</a>
                    </link>
                </li>
            </ul>
        </nav>
    )
}