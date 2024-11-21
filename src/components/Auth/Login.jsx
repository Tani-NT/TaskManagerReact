import { useState } from "react"

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex w-screen font-sans h-screen bg-[#000]  items-center justify-center'>
        <div className='px-[2vw] bg-[#222] pb-[9vw]'>
            <h1 className="pb-[9vw] pt-[2vw]">Login</h1>
            <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center gap-2">
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required type="email" className="py-1 placeholder:text-gray-300 bg-transparent border-[1px] text-[1.4vw] border-[#333] outline-none px-2 rounded-full" placeholder='Enter your Email..' />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required type="password" className="py-1 placeholder:text-gray-300 bg-transparent border-[1px] text-[1.4vw] border-[#333] outline-none px-2 rounded-full" placeholder='Enter your Password..' />
                <input type="submit" className="py-1 w-full font-semibold cursor-pointer bg-blue-400 outline-none px-2 text-[1.4vw] rounded-full" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login
