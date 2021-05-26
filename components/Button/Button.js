const Button = ({size, children}) => {
    return(
        <button className={` bg-gradient-to-r from-cyan-400 to-light-blue-500 font-bold text-white px-6 py-2 rounded hover:bg-green-500 ${size} `}>
            {children}
        </button>
    )
}
export default Button;

