// JavaScript Document

// $(document).ready(function(){ 

//     const here = document.getElementById('here');

//     $.getJSON('https://teamtreehouse.com/meacoding.json', function(data) {
    
//         const jsonData = data.badges;
//         const lastThreeOfJson = jsonData.slice((jsonData.length)-3); 
//         console.log(lastThreeOfJson, 'lastThreeOfJson');

//         for (let i = 0; i < lastThreeOfJson.length; i++){

//             //Course name
//             const name = lastThreeOfJson[i].name;
//             console.log(name, 'name');

//             //Date badge earned
//             const date = new Date(lastThreeOfJson[i].earned_date);
//             function formatDate(date) {
                
//                 const monthNames = [
//                     "Jan", "Feb", "Mar",
//                     "Apr", "May", "Jun", "Jul",
//                     "Aug", "Sep", "Oct",
//                     "Nov", "Dec"
//                 ];
//                 const day = date.getDate();
//                 const monthIndex = date.getMonth();
//                 const year = date.getFullYear();
                
//                 return `${monthNames[monthIndex]} ${day}, ${year}`;
//             }
            
//             const fullDate = `${formatDate(date)}`;
//             console.log(fullDate, 'fullDate');

//             //Badge icon
//             const img = lastThreeOfJson[i].icon_url;

//             //Course link
//             const url = lastThreeOfJson[i].url;
            
//             const card = document.createElement('div');
//             card.classList = 'employee';
//             const htmlCard = `
//                 <a href="${url}" target="_blank">
//                     <img class="employee-img" src="${img}" alt="">
//                     <div class="employee-info">
//                         <h2 class="name">${name}</h2>
//                         <p class="email">${fullDate}</p>
//                     </div>
//                 </a>
//             `;
//             card.innerHTML = htmlCard;
//             here.appendChild(card);

//         }
//     });
    
// });