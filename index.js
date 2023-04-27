function accum(s) {
	var temp =s.split("");
	var array =[];
	var j=0;
	for(var i=0; i<temp.length; i++)
	{
	    array.push(temp[i].toUpperCase())
	    for(var x=0; x<j; x++)
	    {
	        array.push(temp[i].toLowerCase());
	    }
	   array.push("-");
	   j++;
	}
	array.pop();
	return array.join("");
}


console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))