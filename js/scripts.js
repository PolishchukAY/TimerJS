window.onload = function(){
	
	var div = document.querySelector('.items .item');
	var timer = new Timer (60, div);
	
	timer.tick();	
	timer.tick();			
	timer.tick();	
		
	function Timer(time, elem){
		
		this.time = time;
		this.elem = elem;
		
		this.tick = function(){
			this.time--;
			this.elem.innerHTML = this.time;
		}
	}
	
}




