function Fahrenheat()
{
    //read the farhernheit data
    let f = document.getElementById("farhernheit").Value;
    //convert into farhernheit to celisus
   let c =(f-32)*5/9;

   // set the celisus to celsius field

   document.getElementById("celsius").Value=c
}