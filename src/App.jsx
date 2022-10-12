import Header from "./componentes/header"
import ListadoPacientes from "./componentes/listadopacientes"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
function App(){
  return(
    <><Header/>
    <ListadoPacientes/>   
     
   <Formulario/> 
   <Error/>
</>


  )
}
 export default App