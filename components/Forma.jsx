// import React, { useState } from 'react';
// import styles from "../styles/Home.module.css"



// export default function Forma() {
//     // Create state variables for each input field
//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [accountType, setAccountType] = useState('');

//     // Function to handle the form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform the registration logic here
//         console.log({ name, location, phone, email, password, accountType });
//     };

//     return (
//         <div className={styles.formaCenter}>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Wpisz imię i nazwisko</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="location">Twoja miejscowość</label>
//                 <input
//                     type="text"
//                     id="location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="phone">Numer telefonu</label>
//                 <input
//                     type="tel"
//                     id="phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="email">E-mail</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Hasło</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="accountType">Rodzaj konta</label>
//                 <select
//                     id="accountType"
//                     value={accountType}
//                     onChange={(e) => setAccountType(e.target.value)}
//                     required
//                 >
//                     <option value="">Wybierz rodzaj</option>
//                     <option value="personal">Osobiste</option>
//                     <option value="business">Biznesowe</option>
//                 </select>
//             </div>
//             <button type="submit">ZAREJESTRUJ SIĘ</button>
//         </form>
//         </div>
//     );
// }

 