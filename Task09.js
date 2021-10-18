function vowelsInString(theString)
{
    theString = theString.toLowerCase();
    var theVowels = "";
    for(var i = 0; i <= theString.length - 1; i++)
    {
        if(theString.charAt(i) == 'a' || theString.charAt(i) == 'e' || theString.charAt(i) == 'i' || theString.charAt(i) == 'o' || theString.charAt(i) == 'u')
        {
            if(theVowels.includes(theString.charAt(i)))
            {
                continue;
            }
            theVowels += theString.charAt(i) + ", "
        }
    }
    theVowels = theVowels.substr(0, theVowels.length - 2);
    console.log(theVowels);
}