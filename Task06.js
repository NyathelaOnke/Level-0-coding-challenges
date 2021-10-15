
function maximumNum(num1, num2, num3)
{
    var returnNum = num1;
    if (returnNum < num2)
    {
        returnNum = num2;
    }
    if (returnNum < num3)
    {
        returnNum = num3;
    }
    return returnNum;
}