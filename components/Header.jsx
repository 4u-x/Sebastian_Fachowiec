import Link from 'next/link';
import React from 'react';








export default function Header({showLogout}) {
   
    return (
        <div className='buttons'>
       
        <header>
            <nav>
                <ul className="d-flex list-unstyled">
                    <li>
                        <Link href="/">
                        <button className="btn btn-info rounded-pill px-3" type="button">🛕Home</button>

                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/SignUp">
                            <><button className="btn btn-info rounded-pill px-3" type="button">🔒Login</button></>
                        </Link>
                    </li>
                <li>
                        <Link href="/posts/search">
                            <><button className="btn btn-info rounded-pill px-3" type="button">🔎Search</button></>
                        </Link>
                    </li>
                    <li>
                <Link href="/">
                  <button className="btn btn-info rounded-pill px-3" type="button">⏏️Wyloguj</button>
                </Link>
              </li>
                   
                </ul>
            </nav>
           
        </header>
        </div>
    );
}

