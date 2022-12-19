import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto}) => {
   
    const [mensaje, setMensaje] = useState("")

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setcategoria] = useState("")
   
    
    const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
    };

  const handleSubmit = e => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes("")) {
        setMensaje("Todos los campos son obligatorios")
       
        setTimeout(() => {
            setMensaje("")
        }, 3000);
        return
    } 
    guardarGasto({nombre, cantidad, categoria})

    
  }

  
   
  
 

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
       
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input onChange={ event => setNombre(event.target.value)} value={nombre} id="nombre" type="text" placeholder="Añade el Nombre del Gasto"/>
        </div>

        <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input onChange={e => setCantidad(Number(e.target.value))} value={cantidad} id="cantidad" type="number" placeholder="Añade la cantidad del Gasto: ej. 300"/>
        </div>

        <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select value={categoria} onChange={e =>setcategoria(e.target.value)} name="" id="categoria">
                <option value="">--Seleccione--</option>
                <option value="ahorro">Ahorros</option>
                <option value="comida">Comidas</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripcion">Suscripciones</option>

            </select>
        </div>
        <input type="submit" value="Añadir Gasto" />


      </form>
    </div>
  );
};

export default Modal;
