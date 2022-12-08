const Borrowers = [
    {
        id: 1,
        borrower: "Martin Santos",
        addres:"Cintalapa"
    },
    {
        id: 2,
        borrower: "Juan Carlos",
        addres:"Oxhuck"
    },
    {
        id: 3,
        borrower: "Allison Argent",
        addres:"Beacon Hills"
    },
    {
        id: 1,
        borrower: "Alejandra Hernandez",
        addres:"Jiquipilas"
    },
]

function Listado() {
    return ( 
        <div>
        {Borrowers.map((value, index )=>{
          return (
            <section className="seccion-1"  key={index}>
            <div className="container">
               <div className="row ">
               
                    <div className="card" style={{width:"18rem"}}>
                        <p id="id">{value.id}</p>
                         <div className="card-body">
                         <p className="card-text text-white">Nombre del rentador</p>
                            <p>{value.borrower}</p>
                        <p className="card-text text-white">Nombre del rentador</p>
                            <p>{value.addres}</p>
                    </div>
                    </div>
                 
                </div> 
                </div>
            
        </section>

          )
        }
        )}
      </div>

     );
}

export default Listado;