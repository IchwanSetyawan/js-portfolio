$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	// scrol ukuran layar 
	// console.log($('html,body').scrollTop());
	
	//pindahkan scroll
	// $('html,body').scrollTop(elemenTujuan.offset().top);
	// animasi sebenarnya
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutSine'); //bisa juga menggunakan swing/ jquery easing

	e.preventDefault();
	
});  


// parallax

//untuk about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'

	});
 
	
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'

	});	

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'

	});	


	//PORTFOLIO 

	//menampilkan jarak tinggi tertentu dari window
	// if(wScroll > $('.portfolio').offset().top - 250 ){
	// 	console.log('ok');
	// }

	if(wScroll > $('.portfolio').offset().top - 250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');		
			}, 300 * (i+1));
		}); 
		
		
	}

 
});



















