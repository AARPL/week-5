function order(){
alert("voor dat u wilt bestellen, type ja of nee invullen");
var kaas = prompt("is de kaas geel?");
kaas = kaas.toLowerCase();
if (kaas == "ja"){ 
    var gaten = prompt("zitten er gaten in?");
    gaten = gaten.toLowerCase();
    if (gaten == "ja"){
       var duur = prompt("is de kaas belachelijk duur?");
       duur = duur.toLowerCase();
   
       if (duur == "ja"){
        alert("Emmenthaler");
        }
        else if (duur == "nee"){
        	alert("Leerdammer");
        }
        else{
        alert("error please try agian");
        }
     
    }
       else if (gaten == "nee"){
       var hard = prompt("is de kaas hard als steen?");
       hard = hard.toLowerCase();
       if (hard == "ja"){
       	alert("Pamnigiano Reggiano");
       }
       else if (hard == "nee"){
       	alert("Goudse kaas");
       }
       else{
       	alert("error please try agian");
       }
}
        else if (kaas == "nee"){
	      var schimmels = prompt("heeft de kaas blauwe schimmels?");
	      schimmels = schimmels.toLowerCase();
	      if (schimmels == "ja"){
        var korst = prompt("heeft de kaas een korst?");
        korst = korst.toLowerCase();
        if (korst == "ja"){
       	alert("Bleu de Rochbaron");
       } 
        else if (korst == "nee"){
       	alert("Foume D'Ambert");
       }
 }
}
       else if (schimmels == "nee"){
	     var korst = prompt("heeft de kaas een korst?");
       korst = korst.toLowerCase();

       if (korst == "ja"){
     	alert("Camembert");
     }
      else if (korst == "nee"){
     	alert("Mozzarella");
    }
  }
 }
}       