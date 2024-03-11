import ItemCount from "../ItemCount/ItemCount"

export default function ItemsListContainer({greeting}) {
 
    return(
       <>
      <section className="greeting"> 
        <h2 className='text-info'> {greeting}</h2>
      </section>
      <ItemCount/>
       </>
    )
   }