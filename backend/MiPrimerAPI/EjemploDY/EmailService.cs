namespace MiPrimerAPI.EjemploDY
{
    public class EmailService : IEmailService
    {
        public string EnviarMail(string email)
        { 
            return "Email enviado a: " + email;
        }
    }
}
