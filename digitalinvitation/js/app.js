// JavaScript Document


//check for browswer specific affixes to help fix problems
//query fade-in animation



$(document).ready(function(){ 
    
    $('html, body').on('touchmove', function(e){ 
     //prevent native touch activity like scrolling
     e.preventDefault(); 
    });        
    
    $('.btn1').click(function(){
        $(this).delay(400).queue(function(){
            
            $(this).addClass('fadeout');
                $('.flipContainer').addClass('flip').removeClass('shake')
                
            .on('transitionend', function(){
                $('.cardFront').addClass('displayNone');
                $('.btn1').addClass('displayNone');
                $('.btn2').removeClass('displayNone').addClass('reveal')

                    .on('animationend', function(){
                        $('.flipContainer').addClass('shake');
                    });
            });
        });
    });
    
    
    $('.btn2').click(function(){
        $('.flipContainer').removeClass('shake');
        $('.cardBack, .btn2').addClass('fadeout')
        
        .on('animationend', function(){
            $('.cardBack, .btn').addClass('displayNone');
            $('.message').addClass('displayNone');
            $('.flipContainer').removeClass('flipContainer');
            $('.datacard').css('pointer-events', 'none');
            $('.readouttext').text('Insert Card').addClass('displayNone');
            $('.terminal').removeClass('displayNone').addClass('fadein')
            
                .on('animationend', function(){
                    $('.readouttext').delay(750).queue(function(){
                        $(this).removeClass('displayNone');
                        $('.typewriter').addClass('typewriteranimateA'); 
                        $('.datacard').css('pointer-events', 'auto');
                        $(this).dequeue();
                    });
                });
        });
    });
    
    $('.datacard').on('click touchstart', $interaction);  
    
    function $interaction (event) {
        event.preventDefault();
        $(this).addClass('insertcard')
            
                .on('animationend', function(){  
                    $('.readouttext').empty();
                    $('.readouttext').queue(function(){
                        $('.typewriter').removeClass('typewriteranimateA');
                        $(this).text('Initializing').addClass('displayNone');
                        $('.readout > div').css('width', '145px');
                        $(this).dequeue();
                    });
                
                    $('.readouttext').delay(2000).queue(function(){
                        $(this).removeClass('displayNone');
                        $('.typewriter').addClass('typewriteranimateA');
                        $(this).dequeue();
                    });
                
                    $('.readouttext').delay(2750).queue(function(){
                        $('.typewriter').removeClass('typewriteranimateA');
                        $(this).text('Loading').addClass('displayNone');
                        $('.readout > div').css('width', '87px');
                        $(this).dequeue();
                    });
                
                    $('.readouttext').delay(1500).queue(function(){
                        $(this).removeClass('displayNone');
                        $('.typewriter').addClass('typewriteranimateB');
                        $('.ind-1').delay(2250).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $('.ind-2').delay(3000).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $('.ind-3').delay(3750).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $('.ind-4').delay(4500).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $('.ind-5').delay(5250).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $('.ind-6').delay(6000).queue(function(){
                            $(this).addClass('ind-yellow');
                            $(this).dequeue();
                        });
                        $(this).dequeue();
                    }); 
                   
                    $('.readouttext').delay(6000).queue(function(){
                        $('.typewriter').removeClass('typewriteranimateB');
                        $(this).text('Complete').addClass('displayNone');
                        $('.readout > div').css('width', '99px');
                        $(this).dequeue();
                    });
                     $('.readouttext').delay(1250).queue(function(){
                        $(this).removeClass('displayNone');
                        $('.typewriter').addClass('typewriteranimateB');
                        $(this).dequeue();
                    });
                
                    $('.terminal').delay(16250).queue(function(){
                        $(this).addClass('movedown1');
                        $(this).delay(1750).queue(function(){
                            $(this).addClass('displayNone');
                            $(this).dequeue();
                        });
                        $(this).delay(0).queue(function(){
                            $('.invite').removeClass('displayNone');
                            $('.invite').addClass('movedown2');
                            $(this).dequeue();
                        });
                        $(this).dequeue();
                    });
            });        
    }   
});    