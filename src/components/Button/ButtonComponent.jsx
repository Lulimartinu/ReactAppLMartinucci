
export default function ButtonComponent({texto,color}){
    const misEstilos = {
        backgroundColor: color,
       
       }

    return (
        <>
        <button style={misEstilos}> 
            {texto}
        </button>
        </>
    )
}