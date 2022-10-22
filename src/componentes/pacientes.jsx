
function Pacientes(paciente,setPacientes) {

    const{mascota,propietario,email,alta,sintomas}=paciente

    const eliminarFormulario=()=>{
        const respuesta = confirm('¿Estas seguro de eliminar este paciente? ')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-slate-50 shadow-md mx-5 px-5 rounded-md">
            <p className="font-bold text-gray-800 uppercase"> Nombre:<span className="font-normal normal-case">{mascota}</span></p>
            <p className="font-bold text-gray-800 uppercase"> Nombre:<span className="font-normal normal-case">{propietario}</span></p>
            <p className="font-bold text-gray-800 uppercase"> Nombre:<span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold text-gray-800 uppercase"> Nombre:<span className="font-normal normal-case">{alta}</span></p>
            <p className="font-bold text-gray-800 uppercase"> Nombre:<span className="font-normal normal-case">{sintomas}</span></p>


            <div>
                <button type="button" className="bg-indigo-600 text-white font-bold uppercase rounded-md px-10 hover:bg-indigo-700" 
                onClick={()=>setPacientes(paciente)}>Editar</button>
                 <button type="button" className="bg-indigo-600 text-white font-bold uppercase rounded-md px-10 hover:bg-indigo-700" 
                onClick={()=>eliminarFormulario(paciente)}>Editar</button>
            </div>




        </div>
    )



}

export default Pacientes