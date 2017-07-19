
var divyanshu = {};

var img = 'image';

// divyanshu['images/divyanshu'] = img;

// divyanshu['images/himanshu'] = img;

// console.log(divyanshu); 


 urlOrArr = ['images/divyanshu','images/himanshu'];

 urlOrArr.forEach(function(url) {
                _load(url);
            });



function _load(url){

	setTimeout(function () {
		divyanshu[url] = true;

		// console.log('Final:', divyanshu);

		console.log(isReady());
		
	},3000)

	divyanshu[url] = false;

	// console.log('Intial', divyanshu);

	
}


function isReady(){

	var ready = true;
	for(var k in divyanshu) {
	        if(divyanshu.hasOwnProperty(k) && !divyanshu[k]) {
	            ready = false;
	        }
	    }

	return ready;
}



