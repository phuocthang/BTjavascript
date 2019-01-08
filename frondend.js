function  myFunction() {


    var width;
    var height;

    var width = parseFloat(prompt("Enter the width"));
    var height = parseFloat(prompt("Enter the height"));

    var area = width * height;


    document.write("Enter width: " + width);
    document.write("</br>");
    document.write("Enter height: " + height);
    document.write("</br>");
    document.write("The area is: " + area);
}