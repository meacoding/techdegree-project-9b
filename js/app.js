// JavaScript Document
let previousUw = "#project-uw";
let previousDash = "#project-dash";
let previousDi = "#project-di";
let previousAt = "#project-at";
let previousPortfolio = "#project-portfolio";

$(document).ready(function(){ 

    // Get and display recent Treehouse courses taken
    const here = document.getElementById('insert-here');

    $.getJSON('https://teamtreehouse.com/meacoding.json', function(data) {
    
        const jsonData = data.badges;
        const lastThreeOfJson = jsonData.slice((jsonData.length)-4); 
        console.log(lastThreeOfJson, 'lastThreeOfJson');

        for (let i = 0; i < lastThreeOfJson.length; i++){

            //Course name
            const name = lastThreeOfJson[i].name;
            console.log(name, 'name');

            //Date badge earned
            const date = new Date(lastThreeOfJson[i].earned_date);
            function formatDate(date) {
                
                const monthNames = [
                    "Jan", "Feb", "Mar",
                    "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct",
                    "Nov", "Dec"
                ];
                const day = date.getDate();
                const monthIndex = date.getMonth();
                const year = date.getFullYear();
                
                return `${monthNames[monthIndex]} ${day}, ${year}`;
            }
            
            const fullDate = `${formatDate(date)}`;
            console.log(fullDate, 'fullDate');

            //Badge icon
            const img = lastThreeOfJson[i].icon_url;

            //Course link
            const url = lastThreeOfJson[i].url;
            
            const card = document.createElement('div');
            card.classList = 'course';
            const htmlCard = `
                <a href="${url}" target="_blank">
                    <img class="course-img" src="${img}" alt="">
                    <div class="course-info">
                        <h2 class="name">${name}</h2>
                        <p class="email">${fullDate}</p>
                    </div>
                </a>
            `;
            card.innerHTML = htmlCard;
            here.appendChild(card);

        }
    });

    function projectModal (proj, projPrev){
        $(`#project-${proj}`).click(function (){
            // let previous = `previous${proj}`;

            // previous = `#project-$(proj)`;
            $(`#narrative-${proj}`).css('display', 'block');
            $('.body-margins').addClass('noOverflow');
            $('.overlay').animate({
                scrollTop: 0
            }, 400);
        })
        $('.closebtn').click(function(){
            // let previous = `previous${proj}`;
            let top = $(projPrev).position().top;
            $(this).parent().css('display', 'none');
            $('.body-margins').removeClass('noOverflow');
            $('html, body').animate({
                scrollTop: top
            }, 400);
            // projPrev = false;
        });
    }

    projectModal('uw');
    // $('.closebtn').click(function(){
    //     var top = $(previous).position().top;
    //     $(this).parent().css('display', 'none');
    //     $('.body-margins').removeClass('noOverflow');
    //     $('html, body').animate({
    //         scrollTop: top
    //     }, 400);
    //     previous = false;
    // })
    
    // $('#project-uw').click(function (){
    //     previous = '#project-uw';
    //     $('#narrative-uw').css('display', 'block');
    //     $('.body-margins').addClass('noOverflow');
    //     $('.overlay').animate({
    //         scrollTop: 0
    //     }, 400);
    // })
    // $('.closebtn').click(function(){
    //     var top = $(previous).position().top;
    //     $(this).parent().css('display', 'none');
    //     $('.body-margins').removeClass('noOverflow');
    //     $('html, body').animate({
    //         scrollTop: top
    //     }, 400);
    //     previous = false;
    // })
    
    
});