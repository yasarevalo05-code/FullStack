using Microsoft.AspNetCore.Mvc;
using MiPrimerAPI.EjemploDY;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiPrimerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjemploDYController : ControllerBase
    {
        private UsuarioService usuarioService;
        public EjemploDYController(UsuarioService usuarioService)
        {
            this.usuarioService = usuarioService;
        }
        [HttpGet("{email}")]
        public string Get(string email) 
        {
            return this.usuarioService.NotificarEnvioEmail(email);
        }
    }
}
