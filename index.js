function accum(s) {
	//making an array from string
	var temp =s.split("");
	var array =[];
	var j=0;
	//main loop
	for(var i=0; i<temp.length; i++)
	{
  	//first letter uppercase
	    array.push(temp[i].toUpperCase())
	//loop for how many items should be pushed
	    for(var x=0; x<j; x++)
	    {
	        array.push(temp[i].toLowerCase());
	    }
	//"-" after every sequence
	   array.push("-");
	   j++;
	}
	//removing "-"
	array.pop();
	return array.join("");
}

//EXAMPLES:
console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))
