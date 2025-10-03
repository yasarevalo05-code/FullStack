using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Net;

namespace MiPrimerAPI.EjemploDeHerencia
{
    public class Cliente : Persona
    {
        public int NroCliente { get; set; }

        public Cliente(string nombre, string apellido, int dni, int nrocliente) : base(nombre, apellido, dni)
        {
            NroCliente = nrocliente;
        }

        // Sobreescribo el método del padre
        public override void MostrarLosDatos()
        {
            Console.WriteLine(NroCliente);
        }
    }
}
