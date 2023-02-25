public class ErrorHandling
{
    public static void Catch()
    {
        Console.Write("\nPlease enter a number: ");
        string userInput = Console.ReadLine();

        try
        {
            int userInputAsInt = int.Parse(userInput);
        }
        catch (Exception)
        {
            Console.WriteLine("Format exception! Please enter the correct type.");
        }
    }
}
