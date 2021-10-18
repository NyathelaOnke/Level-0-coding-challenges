
function triangleArea(side1, side2, side3)
{
    var theSmiPerimeter = (side1 + side2 + side3) / 2;
    return (Math.sqrt(theSmiPerimeter * (theSmiPerimeter - side1) * (theSmiPerimeter - side2) * (theSmiPerimeter - side3)))
}