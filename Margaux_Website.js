const me = document.querySelector(".hehe");
let array = []; 



function mek(){
    
    let stringValue = me.value;
    let meValue = parseFloat(me.value);
   console.log(meValue);
    
    if (meValue){

        switch(true){
    case (meValue < 0.2):   {
        document.body.innerHTML= "HEHEHEHEHEHEHEH";
        console.log(meValue);
        break;
    };
    case (0.2 <= meValue && meValue < 0.4):  {
        document.body.innerHTML = "NAGGGGG";
        break;
    };
    case (0.4 <= meValue && meValue < 0.6):  {
        document.body.innerHTML =" NYAAAAAAA";
        break;
    };
    case (0.6 <= meValue && meValue< 0.8):  {
        document.body.innerHTML =" coco mama";
        break;

    };
     default:{
        document.body.innerHTML =" BRRRRR BRRRR";
        break;

    };
   
   
   }
       
    }
    else{
        array.push(stringValue);
        console.log(array);
        console.log(array);
        return;
     
    }

   
}



/*Real JS */


/*Time Date */


/*Contents */
 const clickBtn = document.getElementById('bio');
 const clickBtn1 = document.getElementById('missionBtn');
 const clickBtn2 = document.getElementById('strengthBtn');
 const clickBtn3 = document.getElementById('philosophyBtn');

 const personal = document.querySelector('.addBio');
 const mission = document.querySelector('.addMission');
 const strength = document.querySelector('.addStrength');
 const philosophy = document.querySelector('.addPhilosophy');


/* Button for Abouts */
clickBtn.addEventListener('click', ()=>{
    if ( personal.classList.contains('addInfo')){
        personal.classList.remove('addInfo');
        clickBtn.classList.remove('openBtn');
        personal.innerHTML = ``;
    }
    else{
        personal.classList.add('addInfo');
        clickBtn.classList.add('openBtn');
        personal.innerHTML = `<h class="nameBrand color sizeText">Who I am</h>

                            <p class="formatText">Preferred Names: Xua / Gauxy / Rasp</p>
                            <p class="formatText">Gender: She / They</p>
                            <p class="formatText">Sexual Orientation: Pansexual</p>
                            <p class="formatText">Birthday: January 25, 2007</p>

                            <h class="nameBrand color sizeText">What I'm Like</h>

                            <p class="formatText">I'm a furry lover who loves furries specially yaoi furries</p>

                            <h class="nameBrand color sizeText">Main Interest</h>

                            <p class="formatText"> Morely cosplay, Roblox, Buy & Sell, and Especially You! ^^</p>

                            <h class="nameBrand color sizeText">Side Interest</h>

                            <p class="formatText">I'm into  character designing, creating Alternate Universe (AU) and Miss Universe</p>
                            `;
        
    }
    });



clickBtn1.addEventListener('click', ()=>{
    if (mission.classList.contains('addInfo')){
      
        mission.classList.remove('addInfo');
        clickBtn1.classList.remove('openBtn');
        mission.innerHTML ='';
    }
    else {
       
        mission.classList.add('addInfo');
        clickBtn1.classList.add('openBtn');
        mission.innerHTML =` <div class="mission">
                                <h class="nameBrand color sizeText">Mission</h>
                                <p class="formatText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatibus molestias, ratione dolorum perspiciatis magnam earum est quasi nobis corrupti expedita sint accusantium quis! Ut fuga aliquam optio numquam rerum?</p>
                            </div>
                            <div class="vision">
                                <h class="nameBrand color sizeText">Vision</h>
                                <p class="formatText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eius laboriosam? Atque modi hic deleniti reprehenderit? Quasi veniam repudiandae saepe. Ad non alias odio, voluptatem error quo voluptatibus nulla quaerat.</p>
                            </div>`;
        
    }
});
    
clickBtn2.addEventListener('click', ()=>{
    if (strength.classList.contains('addInfo')){
        strength.classList.remove('addInfo');
        clickBtn2.classList.remove('openBtn');
        strength.innerHTML ='';
    }
    else {
        strength.classList.add('addInfo');
        clickBtn2.classList.add('openBtn');
        strength.innerHTML = `<h class="nameBrand color sizeText">Personality Test (Big Five Inventory)</h>

                            <p class="formatText">
                                I'm quite a straightforward person and enjoys the company of my fellow friends
                                —a enthusiastic person who loves to do the things I love and focus on the person who I love

                            </p>
                            <p class="formatText">Gender: She / They</p>
                            <p class="formatText">Sexual Orientation: Pansexual</p>
                            <p class="formatText">Birthday: January 25, 2007</p>

                            <h class="nameBrand color sizeText">My Character Strengths (VIA Strengths)</h>

                            <p class="formatText">• <b>Spiritual</b> - </p>
                            <p class="formatText">• <b>Kindness and Generosity</b> - I love giving and giving them let me love them even more</p>
                            <p class="formatText">• <b>Fairness</b> - I give, and I take; practically wise</p>
                            <p class="formatText">• <b>Forgiveness</b> - I love my enemy</p>
                            <p class="formatText">• <b>Patience</b> - waiting to the right person</p>


                            <h class="nameBrand color sizeText">My Learning Style</h>

                            <p class="formatText">
                                I learn a lot during my teenage years, I really love learning, and captivating people I 
                                usually take it personal since those are my solely motivation

                            </p>
                            `;
    }
});

clickBtn3.addEventListener('click', ()=>{
    if (philosophy.classList.contains('addInfo')){
        philosophy.classList.remove('addInfo');
        clickBtn3.classList.remove('openBtn');
        philosophy.innerHTML ='';
    }
    else {
        philosophy.classList.add('addInfo');
        clickBtn3.classList.add('openBtn');
        philosophy.innerHTML = `   
                            <h class="nameBrand color sizeText">Way of Living</h>

                            <p class="formatText">
                                I grew up in a single child who's able to keep my sanity through drawing.
                                I believe that potato corner is just a potato. That is why the strawberry taste like
                                strawberry
                            </p>
                            `;
    }
});

/*Buttons For Credentials */

const clickBtn4 = document.getElementById('specializationsBtn');
const clickBtn5 = document.getElementById('academicBtn');
const clickBtn6 = document.getElementById('experienceBtn');
const clickBtn7 = document.getElementById('testimonialsBtn');

const specialization = document.querySelector('.addSpecializations');
const academic = document.querySelector('.addAcademic');
const experience = document.querySelector('.addExperience');
const testimonials = document.querySelector('.addTestimonials');


clickBtn4.addEventListener('click', ()=>{
    if (specialization.classList.contains('addInfo')){
        specialization.classList.remove('addInfo');
        clickBtn4.classList.remove('openBtn');
        specialization.innerHTML ='';
    }
    else {
        specialization.classList.add('addInfo');
        clickBtn4.classList.add('openBtn');
        specialization.innerHTML = `    
                              <h class="nameBrand color sizeText">Animation / Illustrator</h>

                            <p class="formatText">I specialize in digital art and rendering characters and / or background</p>
                            <p class="formatText">• Programs :</p>
                            <p class="formatText">&emsp;Ibis Paint</p>
                            <p class="formatText">&emsp;Adobe Photoshop</p>

                            <h class="nameBrand color sizeText">Three Dimensional Modelling</h>

                            <p class="formatText">
                                I'm also recently trying to learn 3D modelling and an Objects

                            </p>
                            <p class="formatText">• Program :</p>
                            <p class="formatText">&emsp;Blender</p>

                            <h class="nameBrand color sizeText">Video Editing</h>

                            <p class="formatText">• Program :</p>
                            <p class="formatText">&emsp;Capcut</p>
                            <p class="formatText">&emsp;Alight Motion</p>

                            `;
    }
});

clickBtn5.addEventListener('click', ()=>{
    if (academic.classList.contains('addInfo')){
        academic.classList.remove('addInfo');
        clickBtn5.classList.remove('openBtn');
        academic.innerHTML ='';
    }
    else {
        academic.classList.add('addInfo');
        clickBtn5.classList.add('openBtn');
        academic.innerHTML = `   
                            
                            <p class="formatText">I currently taking Multimedia course in CIIT College of Arts and Technology as Freshman.</p>
                          

                            <h class="nameBrand color sizeText">CIIT College of arts Arts and Technology</h>

                            <p class="formatText">• a member of cosplayer</p>

                            <h class="nameBrand color sizeText">Arellano University Plaridel Campus Senior Highschool</h>

                            <p class="formatText">• With High Honors 2025</p>
                            <p class="formatText">• With High Honors 2024</p>

                            `;
    }
});

clickBtn6.addEventListener('click', ()=>{
    if (experience.classList.contains('addInfo')){
        experience.classList.remove('addInfo');
        clickBtn6.classList.remove('openBtn');
        experience.innerHTML ='';
    }
    else {
        experience.classList.add('addInfo');
        clickBtn6.classList.add('openBtn');
        experience.innerHTML = `   
                            
                            <h class="nameBrand color sizeText">Freelance & Illustration</h>

                            <p class="formatText">• Buy and Sell Thrift Shop</p>
                            <p class="formatText">• a member of cosplayer</p>
                            <p class="formatText">• Commisioning Arts</p>


                            <h class="nameBrand color sizeText">Tiktok Content Creator</h>

                            <p class="formatText">• 12.2k views in Animations 2026</p>
                            <p class="formatText">• Posting Alternate Universe (AU)</p>

                             <h class="nameBrand color sizeText">Miscellaneous</h>

                            <p class="formatText">• Comicon Cosplayer</p>
                            <p class="formatText">• Furry Lover</p>

                            `;
    }
});


clickBtn7.addEventListener('click', ()=>{
    if (testimonials.classList.contains('addInfo')){
        testimonials.classList.remove('addInfo');
        clickBtn7.classList.remove('openBtn');
        testimonials.innerHTML ='';
    }
    else {
        testimonials.classList.add('addInfo');
        clickBtn7.classList.add('openBtn');
        testimonials.innerHTML = `   
                         
                            <span class="testimonials"><h class="nameBrand color sizeText ">Feedbacks from Rammy</h></span>
                            <span class="testimonials subtext"><p class="formatText">A trustworthy Bestfriend of Xua</p></span>
                            <div class="feedback">
                                <span class="feedbackBorder">
                            <p class="formatText">
                                 &emsp;&emsp;Xua is really great bestfriend of mine, I saw her dedication and even her tears and sweat in her
                                 artworks. She has a lot of potential when it comes in Drawing, even though she sometimes lazy for anatomy, but still
                                 believe that when she master the art of anatomy. She would definitely can create at purely imagination into live.
                                 Coloring to her is like child's play, I'm quite mesmerize about it even I a painter also lacks some color theory applied.

                                 I'm not glazing but rather speaking the truth solely base in my observations. I've been her friend almost 2 years and I would say
                                 she holds a lot of promising future. 

                            </p>
                          
                                 </span>
                            </div>
                            `;
    }
});
