
    //Cada componente debe tener un return
    //Debe estar en el nivel mas alto y solo 1
    //el return es como si fuera el body en html

    function Header(){
        
        return(
            <h1 className="font-black text-center mx-auto mt-10 text-5xl md:w-2/3 ">Seguimiento de Pacientes <span className="text-indigo-500 ">Veterinaria</span></h1>
        )
    }
    export default Header;