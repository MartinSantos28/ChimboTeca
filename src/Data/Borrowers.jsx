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
              <div className="contenido" key={index}> 
                  <p>{value.borrower}</p>
                  <p>{value.addres}</p>
              </div>
          )
        }
        )}
      </div>
     );
}

export default Listado;