var temp=parseFloat(prompt("Enter the temperature in centigrade"));
document.write("Temperature= "+temp+"<br><br>");

if(temp<0){
    document.write("freezing weather");
}

else if(temp>=0 && temp<10){
    document.write("very cold weather");
}

else if(temp>=10 && temp<20){
    document.write("cold weather");
}

else if(temp>=20 && temp<30){
    document.write("normal in temp");
}

else if(temp>=30 && temp<40){
    document.write("it's hot");
}

else{
    document.write("its very hot");
}


