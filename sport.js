//this is for date
const i = new Date();
document.getElementById("pen").innerHTML=i;




//this is for football
    var price1;
	var Quantity1;
	var ct1;

	
var pro = document.getElementById('ft');
var pr = document.getElementById('pr');
var qt = document.getElementById('qt');
var ct = document.getElementById('ct');

profunction = ()=>{

		if(pro.checked){
			pr.value = 3000;
			price1 = 3000;
			}else{
				pr.value = "";
				qt.value = "";
				ct.value = "";
				}
	}

	proqt = ()=>{
		if(pr.value == ''){
			alert("choose an item")
		}else{
			Quantity1=qt.value;

		ct1 = Quantity1 * price1;

		ct.value =ct1;
		}

	}



//this is for baseball

	var price2;
	var Quantity2;
	var cost2;

	
var pro2 = document.getElementById('bb');
var pr2 = document.getElementById('pr2');
var qt2 = document.getElementById('qt2');
var ct2 = document.getElementById('ct2');

profunction2 = ()=>{

		if(pro2.checked){
			pr2.value = 3000;
			price2 = 3000;
			}else{
				pr2.value = "";
				qt2.value = "";
				ct2.value = "";
				}
	}

	proqt2 = ()=>{
		if(pr2.value == ''){
			alert("choose an item")
		}else{
			Quantity2=qt2.value;

		cost2 = Number(Quantity2) * Number(price2);

		ct2.value =cost2;
		}

	}




	//this is for soccer ball
	 var price3;
	var Quantity3;
	var cost3;

	
var pro3 = document.getElementById('sb');
var pr3 = document.getElementById('pr3');
var qt3 = document.getElementById('qt3');
var ct3 = document.getElementById('ct3');

profunction3 = ()=>{

		if(pro3.checked){
			pr3.value = 3500;
			price3 = 3500;
			}else{
				pr3.value = "";
				qt3.value = "";
				ct3.value = "";
				}
	}

	proqt3 = ()=>{
		if(pr3.value == ''){
			alert("choose an item")
		}else{
			Quantity3 = qt3.value;

		cost3 = Number(Quantity3) * Number(price3);

		ct3.value =cost3;
		}

	}



	//this is for total
	

var bud = document.querySelector('#obj');
var tqty1 = document.getElementById('tqty');
var tcost1 = document.getElementById('owe');







tatal = ()=>{

	var tqty1 = Number(qt.value)  + Number(qt2.value) + Number(qt3.value);
	var tcost1 = Number(ct.value) + Number(ct2.value) + Number(ct3.value);
	tqty.value = tqty1;
	owe.value = tcost1;


}


