using Microsoft.AspNetCore.Mvc;
using MiPrimerAPI.EjemploDeInterfaz;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiPrimerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterfazController : ControllerBase
    {
        // GET: api/<InterfazController>
        [HttpGet("perro")]
        public string GetPerro()
        { 
            Perro perro = new Perro();
            return perro.HacerRuido();
        }

        // GET: api/<InterfazController>
        [HttpGet("gato")]
        public string GetGato()
        {
            Gato gato = new Gato();
            return gato.HacerRuido();
        }
    }
}
