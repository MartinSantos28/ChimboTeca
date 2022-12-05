import {useForm} from "react-hook-form"
import Logo from "../assets/img/Biblioteca.png"
import {users} from "../Data/Users"
import { useContext } from 'react';
import UserContext from "../context/UserContext";
import { Navigate,useNavigate } from "react-router-dom";


function bodyLogin() {
  const navigate = useNavigate()
  const { setIsLogued } = useContext(UserContext)
   
  let bandera=false;
  let banderaPass=false;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit= evento => {
    let userExist = users.find(users => users.userName == evento.user)
    let passwordExist = users.find(users => users.pwsd == evento.password)
      console.log(evento);
      if (passwordExist!=undefined){
          banderaPass=true;
      }
      if(userExist!=undefined){ 
        bandera= true;
      } 

      if(bandera && banderaPass ==true){
          setIsLogued(true);
          navigate("/Book")
      }
      if(bandera == false){
        alert("Usuario no registrado")
    }
    if(banderaPass == false){
      alert("Contraseña incorrecta")
  }

      console.log(userExist)
      console.log(bandera)
      console.log(banderaPass)
    }

    return ( 
          
<section className="h-100 gradient-form">
  <div className=" py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src={Logo}
                    style={{width:"350px"}} alt="logo"/>
                  <h4 className="mt-1 mb-5 pb-1">Sirviendo al pueblo desde 2001</h4>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="username"  name="user" onChange={e => setUser(e.target.user)} id="form2Example11" className="form-control"
                      placeholder="Nombre del empleado"
                      {...register("user", {
                        required:{
                          value: true,
                          message : "El campo es requerido"
                        }
                      })}
                      />
                      {errors.user && <p className="text-white">{errors.user.message}</p>}
                    <label className="form-label" htmlFor="form2Example11">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control" 
                    placeholder="contraseña"
                    {...register("password", {
                      required:{
                        value: true,
                        message : "El campo es requerido"
                      },
                      minLength:{
                        value:8,
                        message:"La contraseña debe de tener al menos 8 caracteres"
                      },


                    })}
                    />
                    {errors.password && <p className="text-white">{errors.password.message}</p>}
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  
                    <button  className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"  value="submit" type="submit">Log
                      in</button>

                

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">ChimboTeca</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  


  
        );
}

export default bodyLogin;