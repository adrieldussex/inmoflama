// import { useEffect, useState, useRef } from "react"

// import { Link as LinkRouter } from 'react-router-dom'
// import { useSignInMutation } from '../../../features/usuariosAPI'

// export default function SignIn() {
//     const nicknameRef = useRef()
//     const passwordRef = useRef()

//     const [SignInRedux, { data: signInRedux, error }] = useSignInMutation();

//     const [user, setUser] = useState()
//     let id = signInRedux?.response.user;
//     let msg = "";

//     if(signInRedux?.success){
//         localStorage.setItem('user', JSON.stringify(id))
//     }

//     function handleSubmit(e) {
//         e.preventDefault()

//         let dataLog = {
//             password: passwordRef.current.value,
//             nickname: nicknameRef.current.value,
//         }
//         SignInRedux(dataLog);
//         setUser(signInRedux);
//     }
//     console.log(signInRedux)

//     if (signInRedux?.success) {
//         msg = signInRedux.message;
//     } else {
//         msg = error?.data.message;
//     }

    
//   return (
//     <div className="bg-white py-6 items-center justify-center flex flex-col gap-6 min-h-[60vh]">
//         <h2 className="text-4xl font-bold leading-8 text-blue-900">Inicio de sesión</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <input
//             required='true'
//             type="text"
//             name="usuario"
//             ref={nicknameRef}
//             placeholder='Nombre de usuario'
//             className='rounded-md border-t-4 border-blue-300 shadow-lg'/>
//             <input
//             required='true'
//             type="text"
//             name="contraseña"
//             ref={passwordRef}
//             placeholder='Contraseña'
//             className=' rounded-md border-t-4 border-blue-300 shadow-lg'/>
//             <LinkRouter
//             to='/'
//             className='font-semibold text-blue-600 border-t-4 py-3 px-5 rounded-md  border-blue-600 shadow-lg'>
//                 <button type="submit">Iniciar sesión</button>>
//             </LinkRouter>
//       </form>
//     </div>
//   )
// }



