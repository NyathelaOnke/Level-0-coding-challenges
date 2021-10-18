function commonCharacters (stringOne, stringTwo)
{
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();
    var stringOutput = "";
    for(var i = 0; i <= stringOne.length - 1; i++)
    {
        for(var f = 0; f <= stringTwo.length - 1; f++)
        {
            if(stringOne.charAt(i) == stringTwo.charAt(f))
            {
                stringOutput += stringOne.charAt(i) + ", ";
                stringTwo = stringTwo.replace(stringTwo.charAt(f), "");
                break;
            }
        }
    }
    stringOutput = stringOutput.substr(0, stringOutput.length - 2);
    console.log("Common letters: " + stringOutput);
}