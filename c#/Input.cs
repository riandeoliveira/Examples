public class Input
{
    public static void Prompt()
    {
        Console.Write("Type something: ");
        string input = Console.ReadLine();

        Console.WriteLine($"You typed: {input}");
    }
}
