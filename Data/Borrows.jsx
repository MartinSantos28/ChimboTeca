const Borrows = [
    {
        id: 1,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022",
        employee: "Martin"
    },
    {
        id: 2,
        borrower: "Josue Galdamez",
        book: "Crepusculo",
        dateOfRent: "20/07/2022",
        dateOfDevolution: "24/07/2022",
        employee: "Andres"
    },
    {
        id: 3,
        borrower: "Juan Carmona",
        book: "Eternos",
        dateOfRent: "27/05/2022",
        dateOfDevolution: "1/06/2022",
        employee: "Yael"
    },
    {
        id: 4,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022",
        employee: "Martin"
    },
    {
        id: 5,
        borrower: "Alejandra Hernandez",
        book: "Hush hush",
        dateOfRent: "22/09/2022",
        dateOfDevolution: "27/09/2022",
        employee: "Josue"
    }
]

function Listado() {
    return ( 
        <div>
        {Borrows.map((value, index )=>{
          return (
              <div className="contenido" key={index}> 
            <section className="seccion-1"  key={index}>
                <div className="container">
                   <div className="row ">
                   
                   <div className="card" style={{width:"18rem"}}>

                        <div className="card-body">
                            <h5 className="card-title text-black">Prestador</h5>
                            <p className="card-text text-white">{value.borrower}</p>
                            <p className="card-text">Libro</p>
                            <p className="card-text text-white ">{value.book}</p>
                            <p className="card-text">Dia de Renta</p>
                            <p className="card-text text-white">{value.dateOfRent}</p>
                            <p className="card-text">Dia de devolucion</p>
                            <p className="card-text text-white">{value.dateOfDevolution}</p>
                            <p className="card-text">Empleado que dio la renta</p>
                            <p className="card-text text-white">{value.employee}</p>
                        </div>
                    </div>
                    </div> 
                
                    </div>
                
            </section>
              </div>
          )
        }
        )}
      </div>
     );
}

export default Listado;