namespace MiPrimerAPI.EjemploDeHerencia
{
    public class Persona
    {
        //Declaracion de las propiedades
        public string Nombre { get; set; }
        public string Apellido { get; set; }  
        public int DNI { get; set; } 


        public Persona (string nombre, string apellido, int dni)
        { 
            Nombre = nombre;
            Apellido = apellido;  
            DNI = dni;
        }

        //Funcion para mostrar los datos 
        public virtual void MostrarLosDatos()
        {
            Console.WriteLine("nombre, apellido, dni" + Nombre, Apellido, DNI);
        }
    }
}
