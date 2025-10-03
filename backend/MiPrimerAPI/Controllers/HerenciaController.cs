using Microsoft.AspNetCore.Mvc;
using MiPrimerAPI.EjemploDeHerencia;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiPrimerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HerenciaController : ControllerBase
    {
        // GET: api/<HerenciaController>
        [HttpGet("cliente")]
        public Cliente GetCliente(string nombre, string apellido, int dni, int nrocliente)
        {
            Cliente cliente = new Cliente(nombre, apellido, dni, nrocliente); 
            return cliente;
        }
        // GET: api/<HerenciaController>
        [HttpGet("proveedor")]
        public Proveedor GetProveedor(string nombre, string apellido, int dni, int nroproveedor)
        {
            Proveedor proveedor = new Proveedor(nombre, apellido, dni, nroproveedor);
            return proveedor;
        }
    }
}
