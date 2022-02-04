var  fold= [], sub=[], y,state, bal=0;

function gene() {
	if (gen.value!=0 && gen.value>=1){ if (genty.value==200 || genty.value==500) {
		check();
	if (state) {
for (var i = 0; i <gen.value; i++) {
	var take="", hyp=1;
	for (var j = 1; j<=16; j++) {
		take+=Math.floor(Math.random()*10);
		if (j%4===0){ 
		if(hyp<4){take+="-"; hyp++;} } 	}
		sub=[[take],"Valid",genty.value]; fold.push(sub);
	console.log(fold); } alert("Your operation was successful");	}  }
	else{alert("Please enter 200 or 500");genty.focus();} }
	else{alert("Please enter a valid Number");gen.focus();} }

function check(){
		if (fold.length>=1) {
	for(i=0;i<fold.length;i++){
	 if(fold[i][1]=="Valid" && fold[i][2]==genty.value){ 
	 	alert("N"+genty.value+" voucher is still available, Please click the Available button"+
	 	" to check very well, You can't generate another voucher until they are all USED. "
	 	+"Thank you!");
	 	loadstat.innerHTML="Please load the voucher with Valid on it";
		state=false; break; return false;} else{state=true} } }else{state=true;} }

function aval(){
showval.innerHTML="";	
for (var i=0; i<fold.length; i++) {
showval.innerHTML +=fold[i][0] +" : "+fold[i][1] +" : "+fold[i][2]+"<br>"; } } 

function load(){
	if (lodput.value !==""){
for(i=0;i<fold.length;i++){
	 if(fold[i][0]==lodput.value && fold[i][1]=="Valid"){
	 	fold[i][1]="Used";
	 	loadstat.innerHTML= "Your recharge of "+ fold[i][2]+ " was successful!";
	 	bal= bal+Number(fold[i][2]); aval(); balance();
	  console.log("wow!" + (i+1)); break;}

	  if (fold[i][0]==lodput.value && fold[i][1]=="Used"){
	  	loadstat.innerHTML= " Sorry! this voucher has already been used by you"; break;}
	  
	 if (fold[i][0] !=lodput.value){
	  loadstat.innerHTML= "This voucher is invalid, please try a valid one";}   } }
	  else{alert(" Please enter a valid voucher")}    }

 function balance(){ balval.innerHTML="Your account balance is N"+bal;   }

 function valsave(){
 	fill = JSON.stringify(fold);
 	localStorage.setItem("available", fill);
 	console.log(fill); 	
 	localStorage.setItem("mybalance", bal); 	 }

function getvauto(){
 	fill = localStorage.getItem("available");
 	if (fill==null){fold=[]}else{fold=JSON.parse(fill)};
 	console.log(fold);  console.log(typeof(fold));
 	bal =localStorage.getItem("mybalance");
 	 if(bal==null){bal=0}else{bal=Number(bal);console.log(bal +"   "+typeof(bal)); } };
 	
