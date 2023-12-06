
function imagessmen()
{
   var ims=document.getElementById("overlay");
   ims.style.backgroundImage="url('./images/menmain-removebg-preview.png')"
   var imss=document.getElementById("gg");
   imss.innerHTML="men"
   var vmss=document.getElementById("men");
   vmss.style.backgroundColor='grey'
   var ams=document.getElementById("remove");
   ams.style.visibility='hidden'
   var bms=document.getElementById("removes");
   bms.style.visibility='hidden'
   var cms=document.getElementById("removess");
   cms.style.visibility='hidden'
   var pmss=document.getElementById("women");
   pmss.style.backgroundColor='white'
  

}
function imagesswomen()
{
   var ims=document.getElementById("overlay");
   ims.style.backgroundImage="url('./images/girl_main-removebg-preview.png')"
   var imss=document.getElementById("gg");
   imss.innerHTML="women"
   var pmss=document.getElementById("women");
   pmss.style.backgroundColor='grey'
   var vmss=document.getElementById("men");
   vmss.style.backgroundColor='white'
   var ams=document.getElementById("remove");
   ams.style.visibility='hidden'
   var bms=document.getElementById("removes");
   bms.style.visibility='hidden'
   var cms=document.getElementById("removess");
   cms.style.visibility='hidden'
}
function calcu()
{ 
    var overlay=document.getElementById('overlay')
    overlay.style.visibility='hidden'
    var age=document.getElementById('age').value;
    console.log(age);
    var height=document.getElementById('height').value;
    console.log(height);
    var weight=document.getElementById('weight').value;
    console.log(weight);
    let heights=height*height;
    let bmi=weight/heights;
    let last=(bmi*10000).toFixed(2)
    let resuklt=document.getElementById('result');
    resuklt.innerHTML=`<h1>BMI LEVEL:${last}</h1>`
    let ds=document.getElementById('gg').textContent;
   console.log(ds);
    if(last<=18.5)
    {
        if(ds=="men")
        { 
            
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Underweight</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/under_weight_men-removebg-preview.png')"
        }
        else{
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Underweight</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/underwomen-removebg-preview.png')"
        }
    }
    else if(last>18.5 && last<=24.9)
    {
        if(ds=="men")
        { 
            
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Healty Weight</h2>`
        resukltv.style.color='green'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/healtymen-removebg-preview.png')"
        }
        else{
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Healthy Weight</h2>`
        resukltv.style.color='green'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/hwomen-removebg-preview.png')"
        }
    }
    else if(last>25 && last<=29.9)
    {
        
        if(ds=="men")
        { 
            
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Over Weight</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/over_menss-removebg-preview.png')"
        }
        else{
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Over Weight</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/over_women-removebg-preview.png')"
        }
    }
    else if( last>30)
    {
        if(ds=="men")
        { 
            
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Obesity</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/obmen-removebg-preview.png')"
        }
        else{
            let resukltv=document.getElementById('conclu');
        resukltv.innerHTML=`<h2>Obesity</h2>`
        resukltv.style.color='red'
        var cms=document.getElementById("sample");
        cms.style.backgroundImage="url('./images/obwomen-removebg-preview.png')"
        }
    }
   
}