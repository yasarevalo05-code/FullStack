using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiPrimerAPI.Repository;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiPrimerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Ejercicios1Controller : ControllerBase
    {
        // Lista en memoria con datos iniciales
        //private static List<string> instruments = new() { "Guitarra", "Batería", "Piano" };

        // GET: api/instruments    (Mostrar todos los instrumentos)
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(InstrumentRepository.Instruments);
        }
    
        // POST api/instruments    (agregar un nuevo instrumento)
        [HttpPost]
        public ActionResult<string> Post([FromBody] string instrument)
        {

            InstrumentRepository.Instruments.Add(instrument);

            return Ok($"Instrumento agregado: {instrument}");
        }

        // PUT: api/instruments/{id}
        [HttpPut("{id}")]
        public ActionResult<string> Put(int id, [FromBody] string newInstrument)
        {
            if (id < 0 || id >= InstrumentRepository.Instruments.Count)
                return NotFound($"El instrumento no existe");

            InstrumentRepository.Instruments[id] = newInstrument;

            return Ok($"Instrumento en posición {id} actualizado a: {newInstrument}");
        }

        // DELETE: api/instruments/{id}
        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
        {
            if (id < 0 || id >= InstrumentRepository.Instruments.Count)
                return NotFound($"El instrumento no existe");

            string deletedInstrument = InstrumentRepository.Instruments[id];

            InstrumentRepository.Instruments.RemoveAt(id);

            return Ok($"Instrumento eliminado: {deletedInstrument}");
        }


    }
}
