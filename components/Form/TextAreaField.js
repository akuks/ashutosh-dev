function TextAreaComponent(props) {
    return (
        <textarea type={props.type.type} id={props.type.id} name={props.type.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
            px-4 py-4 focus:outline-none focus:shadow-outline"
            placeholder={props.type.placeholder} rows={props.type.rows}/>
    )
}

export default TextAreaComponent