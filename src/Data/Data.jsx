
import '../assets/style/listado.css'
import { Books } from "./Books"  
 

function Listado() {
        

    return (  
        <div>
        {Books.map((value, index )=>{
          return (
              
            <section className="seccion-1"  key={index}>
                <div className="container">
                   <div className="row ">
                   <div className="card p-5" style={{width:"18rem"}}>
                        <img src={value.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">{value.tittle}</h5>
                            <p className="card-text text-white">{value.author}</p>
                            <p className="card-text text-white">{value.year}</p>
                            
                            
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