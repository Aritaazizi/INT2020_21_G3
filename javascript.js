
function openKycu(){
    window.open("/user/kycu.html","_blank","top=40,bottom=400,left=600,height=600,width=600");
}
function openRegjistrohu(){
    window.open("/user/regjistrohu.html","_blank","top=0,left=200,height=700,width=1000");
}
function darkmode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}
function checkforblank(){
 if(document.getElementById('EmriMbiemri').value == "")
 {
            alert('Ju lutem jepni Emri dhe Mbiemrin tuaj');
            document.getElementById('EmriMbiemri').style.borderColor = "red";
            document.getElementById('EmriMbiemri').style.color = "white";
            document.getElementById('EmriMbiemri').style.background = "red";
            
            return false;
 }
         if(document.getElementById('email').value == ""){
            alert('Ju lutem jepni emailin tuaj');
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('email').style.color = "white";
            document.getElementById('email').style.background = "red";
            return false;
      }
        if(document.getElementById('subjekti').value == ""){
            alert('Keni harruar subjektin?');
            document.getElementById('subjekti').style.borderColor = "red";
            document.getElementById('subjekti').style.color = "white";
            document.getElementById('subjekti').style.background = "red";
            return false;
     }
      
 }
 function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Shiko më shumë"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lexo më pak"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtnn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Shiko më shumë"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lexo më pak"; 
      moreText.style.display = "inline";
    }
  }
