/*Real JS */


function popUp(){
    const pop = document.querySelector('.alert');

    pop.innerHTML = `  <div class="alertW">
                <div class="alertFront">
                <h class=" nameBrand color margin">HELLO</h>
                </div>
            </div>`;
}

/*Time Date */

const workingTime = document.getElementById('time');
function clock(){


const time = new Date();
const cities = {
 'Ph' : 'Philippines/Metro_Manila'
}

for (let day in cities) {
    let make = time.toLocaleTimeString('en-Us', {hour:'numeric', minute:'2-digit'});
    workingTime.innerHTML = `
    <div class="localTextWrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="var(--location-height)" width="24px" fill="var(--location-color)"><path d="M13.41,11.41Q14,10.83 14,10q0-0.83-0.59-1.41T12,8T10.59,8.59T10,10t0.59,1.41T12,12t1.41-0.59ZM12,19.35q3.05-2.8 4.53-5.09Q18,11.98 18,10.2q0-2.73-1.74-4.46Q14.53,4 12,4T7.74,5.74Q6,7.47 6,10.2q0,1.78 1.48,4.06T12,19.35ZM12,22q-4.02-3.43-6.01-6.36T4,10.2Q4,6.45 6.41,4.22T12,2t5.59,2.22T20,10.2q0,2.5-1.99,5.44Q16.03,18.58 12,22Zm0-12Z"/></svg>
    <div class="localText">Local Time: ${make}</div></div>
    <div class="localFormat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="var(--globe-height)" width="24px" fill="var(--globe-color)"><path d="M12,22q-2.07,0-3.9-0.79q-1.82-0.79-3.17-2.14Q3.58,17.73 2.79,15.9T2,12Q2,9.92 2.79,8.1Q3.58,6.27 4.93,4.93Q6.28,3.57 8.1,2.79Q9.93,2 12,2t3.9,0.79t3.17,2.14q1.35,1.35 2.14,3.17Q22,9.92 22,12t-0.79,3.9t-2.14,3.17q-1.35,1.35-3.17,2.14T12,22Zm0-2q3.35,0 5.68-2.32T20,12q0-0.18-0.01-0.36t-0.01-0.31q-0.13,0.72-0.68,1.2T18,13H16q-0.82,0-1.41-0.59T14,11V10H10V8q0-0.82 0.59-1.41T12,6h1q0-0.57 0.31-1.01t0.76-0.71q-0.5-0.13-1.01-0.2T12,4Q8.65,4 6.33,6.32T4,12H9q1.65,0 2.83,1.17T13,16v1H10v2.75q0.5,0.13 0.99,0.19T12,20Z"/></svg>
    EN / TL</div>
    
    `;
;
}
}

setInterval(clock, 1000);

/* Sidebar Section */

let sidebar = document.querySelector('.sidebar');
let sidebar_content = document.querySelector('.sidebarWrapper');
let mainColor = document.querySelector('.mainWrap');
let profile = document.querySelector('.profile');
let headWrap = document.querySelector('.headTitleWrap');

window.onscroll = () =>{

    let scrollUp = window.scrollY;
    let viewingPortHeight = window.innerHeight;
    let articleHeight = sidebar_content.getBoundingClientRect().height;
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

    if ( scrollUp <= 200){
        profile.style.height =  '200px';
        profile.style.width = '200px';
        profile.style.margin = '-75px';

        headWrap.style = 'grid-template-rows: 125px 1fr 1fr;';
       
        mainColor.classList.remove('colorGradient');
    }
    else {
        profile.style.height = '150px';
        profile.style.width = '150px';
        profile.style.margin = '-50px';
        
        headWrap.style = 'grid-template-rows: 100px 1fr 1fr;';

        mainColor.classList.add('colordGradient');
    }

    if(scrollUp >= articleHeight - viewingPortHeight + sidebarTop){
        sidebar_content.style.transform = `translateY(-${articleHeight - viewingPortHeight + scrollUp}px)`;
        sidebar_content.style.position = 'fixed';
        sidebar.style.minHeight = `${articleHeight}px`;
        sidebar_content.style.bottom = '0px';
        sidebar_content.style.top = 'auto';
        sidebar_content.style.width = `${sidebar.getBoundingClientRect().width}px`; // Match parent layout column width
        sidebar_content.style.transform = ''; 
       
        
    }
    else  {
        console.log(scrollUp);
        sidebar_content.style.transform = '';
        sidebar_content.style.position = '';
        sidebar_content.style.bottom = '';
        sidebar_content.style.width = '';   
        
    }


    
}

const rates = document.getElementById('ratesBtn');
const terms = document.getElementById('termsBtn');
const myWorks =document.getElementById('portfolioBtn');
const about = document.getElementById('aboutBtn');

rates.addEventListener('click', ()=>{
    window.location.href = 'Rates.html';
});

terms.addEventListener('click', ()=>{
    window.location.href = 'Terms.html';
});

myWorks.addEventListener('click', ()=>{
    window.location.href = "Portfolio.html";
});

about.addEventListener('click', ()=>{
    window.location.href = "index.html";
});
