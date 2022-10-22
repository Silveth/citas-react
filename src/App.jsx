import Header from "./componentes/header"
import ListadoPacientes from "./componentes/listadopacientes"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Pacientes from "./componentes/pacientes"
import { useState } from "react"

function App() {

  const [pacientes, setPacientes] = useState([]);
  


  return (
    <div className="container mx-auto mt-15">
      <Header

      />

      <div className="md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} />

        <ListadoPacientes />
      </div>


    </div>


  )
}
export default App