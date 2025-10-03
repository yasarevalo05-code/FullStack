namespace MiPrimerAPI.EjemploDeHerencia
{
    public class Proveedor : Persona
    {
        public int NroProveedor { get; set; }

        public Proveedor(string nombre, string apellido, int dni, int nroproveedor) : base(nombre, apellido, dni)
        {
            NroProveedor = nroproveedor;
        }

        // Sobreescribo el método del padre
        public override void MostrarLosDatos()
        {
            Console.WriteLine(NroProveedor);
        }
    }
}
