
import Hush from "../assets/img/Hush hush.jpg"
import Hunger from "../assets/img/HungerGames.jpg"
import Vaquero from "../assets/img/ElLibroVaquero.jpg"
import Maze from "../assets/img/MazeRunner.jpg"
import Eternos from "../assets/img/Eternos.jpg"
import Catching from "../assets/img/CatchingFire.jpg"
import Mockingjay from "../assets/img/Mockingjay.jpg"
import '../assets/style/listado.css'

  const  books= [
        {
            id:1,
            img: Hush,
            tittle: "Hush Hush",
            year:"2009",
            author:"Becca Flitzpatrick"
        },
        {
            id:2,
            img: Hunger,
            tittle: "Hunger Games",
            year:"2008",
            author:"Suzanne Collins"
        },
        {
            id:3,
            img: Vaquero,
            tittle: "El libro Vaquero",
            year:"1978",
            author:"Carlos Lopez"
        },
        {
            id:4,
            img: Maze,
            tittle: "The Maze Runner",
            year:"2009",
            author:"James Dashner"
        },
        {
            id:5,
            img: Eternos,
            tittle: "Eternos",
            year:"2007",
            author:"Kirsten Miller"
        },
        {
            id:6,
            img: Catching,
            tittle: "Catching Fire",
            year:"2009",
            author:"Kirsten Miller"
        },
        {
            id:7,
            img: Mockingjay,
            tittle: "Mockingjay",
            year:"2010",
            author:"Kirsten Miller"
        },
        
    ]

 
 

function Listado() {
    

    return ( 
        <div>
        {books.map((value, index )=>{
          return (
              
            <section className="seccion-1"  key={index}>
                <div className="container">
                   <div className="row ">
                   <div className="col-md-3" >
                        <div className="card" style={{width:"18rem"}}>
                            <p id="id">{value.id}</p>
                             <img src={value.img} className="card-img-top" alt="..."/>
                             <div className="card-body">
                             <p>{value.author}</p>
                             <p>{value.year}</p>
                             <p>{value.tittle}</p>
                        </div>
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