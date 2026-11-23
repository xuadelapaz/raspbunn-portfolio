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
        personal.innerHTML = `<h class="nameBrand color sizeText">Get to know me ! :</h>

                            <p class="formatText">Preferred Names: Xua / Mango / Margaux</p>
                            <p class="formatText">Gender: She / They</p>
                            <p class="formatText">Sexual Orientation: Pansexual</p>
                            <p class="formatText">Birthday: January 25, 2007</p>

                            <h class="nameBrand color sizeText">What I'm Like</h>

                            <p class="formatText">I'm a tradigital artist that loves to design people in pretty clothes :3</p>

                            <h class="nameBrand color sizeText">Main Interest</h>

                            <p class="formatText"> Mostly cosplay, rhythm games especially maimai, and Buy & Sell ^^</p>

                            <h class="nameBrand color sizeText">Side Interest</h>

                            <p class="formatText">I'm into character designing and creating Alternate Universe (AU)</p>
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
        strength.innerHTML = `<h class="nameBrand color sizeText">Personality Test (Big Five Inventory) My Character Strengths (VIA Strengths)</h>
        
                              <video class="personalityVideo" autoplay disablePictureInPicture >
                                 <source src="image/TransparentW.webm" type="video/webm">
                              </video>
                            <p class="formatText">
                                ❖ Curiosity - I find so many subjects and topics fascinating, and I'm always looking to explore and discover new things.

                            </p>
                            <p class="formatText">❖ Love - I deeply value close relationships, especially the ones where caring and sharing go both ways. Being close to the people in my life means a lot to me.</p>
                            <p class="formatText">❖ Humor - I really enjoy laughing, teasing, and bringing smiles to people's faces. I like looking on the light side of things and making life a bit funnier.</p>
                            <p class="formatText">❖ Fairness - I believe in treating everyone equally based on fairness and justice. I try not to let personal feelings bias my decisions, and I make sure everyone gets a fair chance.</p>
                            <p class="formatText">❖ Honesty - I stick to speaking the truth, but more than that, I focus on being genuine and sincere in how I present myself. I don’t sugarcoat, and I take full responsibility for my feelings and actions.</p>
                            <p class="formatText">❖ Bravery - I don't back down from threats, challenges, difficulties, or pain. I'm willing to speak up for what's right even when people disagree, and I stand by my convictions even if it makes me unpopular.</p>

                            <h class="nameBrand color sizeText">My Learning Style</h>

                            <p class="formatText">
                               My learning style preference is Visual. Personally, having a visual learning style basically means I learn way better when I can actually see what I'm studying like using pictures, diagrams, and videos. (Side note: I actually hope this particular activity also had an example)

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
                            <h class="nameBrand color sizeText">Personal Values or Life Philosophy</h>

                            <p class="formatText">
                               Don’t let every rejection drain your whole mood, if only you could count how close each rejections actually bring you to success, maybeit isn’t bad afterall.
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
                                I'm also recently trying to learn 3D modelling.

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
                            <p class="formatText"></p>

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
