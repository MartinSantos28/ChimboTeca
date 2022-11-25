const Borrows = [
    {
        id: 1,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022"
    },
    {
        id: 2,
        borrower: "Josue Galdamez",
        book: "Crepusculo",
        dateOfRent: "20/07/2022",
        dateOfDevolution: "24/07/2022"
    },
    {
        id: 3,
        borrower: "Juan Carmona",
        book: "Eternos",
        dateOfRent: "27/05/2022",
        dateOfDevolution: "1/06/2022"
    },
    {
        id: 4,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022"
    },
    {
        id: 5,
        borrower: "Alejandra Hernandez",
        book: "Hush hush",
        dateOfRent: "22/09/2022",
        dateOfDevolution: "27/09/2022"
    }
]

function Listado() {
    return ( 
        <div>
        {Borrows.map((value, index )=>{
          return (
              <div className="contenido" key={index}> 
                  <h4>Prestamista</h4>
                  <p>{value.borrower}</p>
                  <h4>Libro prestado</h4>
                  <p>{value.book}</p>
                  <h4>Dia de renta</h4>
                  <p>{value.dateOfRent}</p>
                  <h4>Dia de Devolucion</h4>
                  <p>{value.dateOfDevolution}</p>
              </div>
          )
        }
        )}
      </div>
     );
}

export default Listado;