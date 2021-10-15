
function numberToTime (num)
{
    var hour = parseInt(num/60);
    var minute = num % 60;
    var outputMin = "minute";
    var outputHour = "hour";
    if (hour > 1)
    {
        outputHour += "s";
    }
    if (minute > 1)
    {
        outputMin += "s";
    }
    return hour + " " + outputHour + ", " + minute + " " + outputMin;
}