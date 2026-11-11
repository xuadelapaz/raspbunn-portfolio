/*Real JS */
const pop = document.querySelector('.alert');
const closeBtn = document.querySelector('.alertClose');
const queue = document.getElementById('workQueueBtn');

if (queue){
    queue.addEventListener('click', ()=>{
         pop.innerHTML = ` <div class="alertW">
                <div class="alertFront">
                    <div class="alertGrid">
                        <div class="alertSection1"> 
                            <button class="alertClose">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/></svg>
                            </button>
                        </div>
                        <div class="alertSection2">
                            <div class="alertSection2Wrap">
                                <div class="alertProfileWrap">
                                    <div class="alertProfile"></div>
                                </div>
                                <div class="raspTextWrap">
                                    <h class="nameBrand color rasp">Raspbunn</h>
                                    <p class="atRasp">@rcspbunn</p>
                                </div>
                                
                            </div>
                            <div class="workWrap">
                                    <h1>Work Queue</h1>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M4,20V18H6.75l-0.4-0.35q-1.3-1.15-1.83-2.62T4,12.05Q4,9.27 5.66,7.11T10,4.25v2.1Q8.2,7 7.1,8.56T6,12.05q0,1.13 0.43,2.19T7.75,16.2L8,16.45V14h2v6H4Zm10-0.25v-2.1q1.8-0.65 2.9-2.21T18,11.95q0-1.13-0.43-2.19T16.25,7.8L16,7.55V10H14V4h6V6H17.25l0.4,0.35q1.22,1.23 1.79,2.66T20,11.95q0,2.78-1.66,4.94T14,19.75Z"/></svg>Synced to Raspbunn</p>
                                    <div class="boxTextWrap">
                                       Thank you for considering me for your commission! Please note that I may not work in the exact order that the queue is sorted in.
                                    </div>
                            </div>
                            <div class="queueWrap">
                                <div class="category">
                                    <p>All</p>
                                    <p>By Service</p>
                                </div>
                                <div class="categoryBoxWrap">
                                    <div class="categoryBox">
                                        <div class="box newBox">✨ New</div>
                                        <div class="outerBoxItem newColor">
                                            <div class="boxItem itemN">Nothing in Here yet</div>
                                        </div>
                                    </div>
                                    <div class="categoryBox">
                                        <div class="box waitBox">Waitlist</div>
                                        <div class="outerBoxItem waitColor">
                                            <div class="boxItem itemW">Nothing in Here yet</div>
                                        </div>
                                    </div>
                                    <div class="categoryBox">
                                        <div class=" box queueBox">In Queue</div>
                                        <div class="outerBoxItem queueColor">
                                            <div class="boxItem itemQ">Nothing in Here yet</div>
                                        </div>
                                    </div>
                                    <div class="categoryBox">
                                        <div class="box wipBox">WIP</div>
                                        <div class="outerBoxItem wipColor">
                                            <div class="boxItem itemWI">Nothing in Here yet</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> `;

        const alertW = pop.querySelector('.alertW');
        const alertFront = pop.querySelector('.alertFront');

        // Set the starting styles before animating
        alertW.style.opacity = '0';
        alertW.style.transition = 'opacity 0.3s ease-out, background-color 0.3s ease-out';
        alertW.style.backgroundColor = 'rgba(255, 144, 144, 0)';

        alertFront.style.transform = 'translate(-50%, -45%) scale(0.95)';
        alertFront.style.opacity = '0';
        alertFront.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out';

        //  Force browser layout recalculation and apply target state frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                alertW.style.opacity = '1';
                alertW.style.backgroundColor = 'rgba(255, 144, 144, 0.5)';
                
                alertFront.style.transform = 'translate(-50%, -50%) scale(1)';
                alertFront.style.opacity = '1';
            });
        });
    });
    
}

if (pop){
    pop.addEventListener('click', (event)=>{
        if (event.target.closest('.alertClose')){
            const alertW = pop.querySelector('.alertW');
            const alertFront = pop.querySelector('.alertFront');

            if (alertW && alertFront) {
                // Reverse the styles for exit transition
                alertW.style.opacity = '0';
                alertW.style.backgroundColor = 'rgba(255, 144, 144, 0)';
                alertFront.style.transform = 'translate(-50%, -45%) scale(0.95)';
                alertFront.style.opacity = '0';

                // Clear layout from DOM tree after transitions complete
                setTimeout(() => {
                    pop.innerHTML = '';
                }, 300); 
            }
        }
    });
}

function popUp(){
    

    pop.innerHTML = ` <div class="alertW">
                <div class="alertFront">
                    <div class="alertGrid">
                        <div class="alertSection1"> 
                            <button class="alertClose">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/></svg>
                            </button>
                        </div>
                        <div class="alertSection2">
                            <div class="alertSection2Container">
                                    <div class="raspWrap">
                                    <div class="alertSection2Wrap">
                               
                                        <div class="alertProfileWrap">
                                            <div class="alertProfile"></div>
                                        </div>
                                        <div class="raspTextWrap">
                                            <h class="nameBrand color rasp">Raspbunn</h>
                                            <p class="atRasp">@rcspbunn</p>
                                        </div>
                                        
                                            
                                    
                                    </div>
                                        <h1 class="messageTextFront">Message Me now for commission</h1>
                                        <p class="messageTextSubtext">Thank you for the commission. Your continued support is greatly appreciated<p>
                                        <div class="messageImgWrapper"><div class="messageImg"></div></div>
                                    </div>
                                   <div class="workWrap emailContainer">
                                        <div class="emailSectionWrap">

                                            <div class="emailInsideContainer">
                                                <h2>Username :</h2>
                                                <input type="text" placeholder="Enter Your Name oh seeker" class="username">
                                                <h2>Email :</h2>
                                                <input type="text" placeholder="Enter your Email great one! (Example: @gmail.com)" class="email">
                                                <h2>Subject :</h2>
                                                <input type="text" placeholder="What is your agenda oh great one?" class="subject">
                                                <h2>Message to me :</h2>
                                                <input type="text" placeholder="Enter your request adventurer!" class="message">
                                                <div class="submitDisplay">
                                                    <button type="submit" class="submitDesign">Submit!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
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

if(rates){

rates.addEventListener('click', ()=>{
    window.location.href = 'Rates.html';
});

}

if (terms){
terms.addEventListener('click', ()=>{
    window.location.href = 'Terms.html';
});
}

if (myWorks){
myWorks.addEventListener('click', ()=>{
    window.location.href = "Portfolio.html";
});
}

if (about){
about.addEventListener('click', ()=>{
    window.location.href = "index.html";
});
}
