using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiPrimerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {

        [HttpGet("GetName")]
        public string GetNameOpcionUno([FromQuery] string name)
        {
            string fullName = name + " Arevalo";
            return fullName;
        }

        [HttpGet("{name}")]
        public string GetNameOpcionDos([FromRoute] string name)
        {
            string fullName = name + " Arevalo";
            return fullName;
        }


        [HttpPost]
        [Route("PostName")]
        public string PostNameOpcionDos([FromBody] string fistname, [FromQuery] string lastName)
        {
            string fullName = fistname + " " + lastName;
            return fullName;
        }
    }
}
