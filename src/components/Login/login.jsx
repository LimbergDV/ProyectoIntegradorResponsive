import React from "react";
import '../../styles/login.css';
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login (){
    return(
        <>
        <div className="principalContainer">
        <div className="formLogin">
            <form action="">
                <h1>¿Ya estás registrado?</h1>
                <h2>Si ya tienes una cuenta con <br />nosotros, por favor, inicie sesión.</h2>
                
                <div className="inputMail">
                <label htmlFor="" className="labelMail">Correo Electónico:</label>
                <input type="text" placeholder="Ingrese su correo electrónico" required/>
                <MdMail className="icon"/>
                </div>
                

                <div className="inputPassword">
                    <label htmlFor="" className="labelPassword">Contraseña:</label>
                    <input type="password" placeholder="Ingrese su contraseña" required/>
                    <FaLock className="icon2"/>
                </div>

                <button type="submit">Ingresar</button>
                <br />
                <br />
                
                <div className="registerOpcion">
                    <p>¿No tienes una cuenta en nuestro sitio web? <a href="#">Registrate</a></p>
                </div>

                <div className="opcionAdmin">
                    <p>¿Eres administrador? <br /><a href="">Inicia Sesión Aquí</a></p>
                </div>

                <div className="opcionRecepcionista">
                    <p>¿Eres recepcionista? <br /><a href="#">Inicia Sesión Aquí</a></p>
                </div>

            </form>

        </div>

        </div>
        </>
    )
}

export default Login