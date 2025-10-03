namespace MiPrimerAPI.EjemploDY
{
    public class UsuarioService
    {
        private IEmailService emailService;
        public UsuarioService(IEmailService emailService) 
        {
            this.emailService = emailService;
        }
        public string NotificarEnvioEmail(string email)
        { 
            return this.emailService.EnviarMail(email);
        }
    }
}
