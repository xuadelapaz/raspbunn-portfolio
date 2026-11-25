const displayList = document.querySelector('.commissionContainer');
const pullRequest = document.querySelector('.pullRequestDisplay');
const commissionProduct = [
    {
    id: 1,
    description: 'Anime Bust-Up Commission',
    price: parseFloat(" 925.95"),
    bookmark: 'on',
    image: 'portfolio/7-small.png'
    },
    {
        id: 2,
        description: 'Anime Half Body Commission',
        price :  parseFloat("1234.60"),
        bookmark: 'on',
        image: 'portfolio/2-large.jpg'
    },
    {
        id: 3,
        description: 'Anime Full Body Commission',
        price: parseFloat("1543.25"),
        bookmark: 'on',
        image: 'portfolio/8-small.png'
    },
    {
        id: 4,
        description: 'Anime Yumeship / Couple Full Body Commission',
        price: parseFloat("2500.00"),
        bookmark: 'on',
        image: 'portfolio/9-medium.jpg'
    },
    {
        id: 5,
        description: 'Full Body Chibi Commission / Custom Chibi Design',
        price: parseFloat("1234.60"),
        bookmark: 'on',
        image: 'portfolio/6-small.png'
    }

];

displayList.innerHTML = commissionProduct.map((item) => {
    let {id, description, price, bookmark, image} = item;

    let bookmarkHtml = bookmark === 'on' ? `
                                    <div class="bookMark">
                                        <svg class="bookMarkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M5,21V5Q5,4.17 5.59,3.59T7,3H17q0.82,0 1.41,0.59T19,5V21l-7-3L5,21Zm2-3.05l5-2.15l5,2.15V5H7V17.95ZM7,5H17H12H7Z"/></svg> 
                                    </div>` : '';

    
    const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
    });
 
    return `<div class="commissionWrapper">
                            
                            <div class="commissionCard">
                                <div class="imgContainer">
                                    <img class="blurImg" src="${image}" alt="" > </img>
                                    <img class="imgFormat" src="${image}" alt="" > </img>
                                </div>
                                <div class="priceWrapper">
                                ${bookmarkHtml}
                                    <div class="textWrapper">
                                        <div class="priceText">${description}</div>
                                        <div class="priceTag">From PH P${formattedPrice}</div>
                                       

                                    </div>
                                    <div class="buttonWrapper">
                                         <button class="pullRequest" onclick="request(${id})">Start Request</button>
                                         <button class="messageBtn" onclick="popUp()">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M8.71,10.71Q9,10.43 9,10Q9,9.57 8.71,9.29T8,9Q7.58,9 7.29,9.29T7,10t0.29,0.71T8,11t0.71-0.29Zm4,0Q13,10.43 13,10q0-0.43-0.29-0.71T12,9T11.29,9.29T11,10t0.29,0.71T12,11t0.71-0.29Zm4,0Q17,10.43 17,10q0-0.43-0.29-0.71T16,9T15.29,9.29T15,10t0.29,0.71T16,11q0.43,0 0.71-0.29ZM2,22V4Q2,3.17 2.59,2.59T4,2H20q0.83,0 1.41,0.59T22,4V16q0,0.82-0.59,1.41T20,18H6L2,22Zm3.15-6H20V4H4V17.13L5.15,16ZM4,16V4V16Z"/></svg>
                                         </button>
                                    </div>

                                </div>

                           </div>
                        </div>`;
                        
                      
}).join('');


function request(id){
    const item = commissionProduct.find((product) => product.id === id);
    
    if (!item) return;

    const { description, price, image } = item;

    const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
    });

    pullRequest.innerHTML = `<div class="alertW">
        <div class="alertFront">
            <div class="alertGrid">
                        <div class="alertSection1"> 
                            <button class="alertClose" onclick="closePop()">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/></svg>
                            </button>
                        </div>
                <div class="alertGridWrap">
                    
                    <div class="leftSideAlert">
                        
                        <div class="partOneWrap">
                            <img src="${image}" alt="" class="imageFront">
                            
                        </div>
                    </div>
                    <div class="rightSideAlert">
                        <div class="partTwoWrap">
                                <div class="headNamePrice">
                                    <p class="subtextPull">Offer</p>
                                    <h2 class="description">${description}</h2>
                                </div>
                                <div class="headPricetag">
                                    <p class="subtextPull">From PHP <span id="modalPrice">${formattedPrice}</span></p>
                                </div>
                                <div class="checkBoxWrap">
                                    <div class="checkBoxContainer">
                                        <input class="checkBoxDesign" type="checkbox" checked disabled>
                                        Personal
                                    </div>
                                    <div class="textInCheck">Included</div>
                                    <div class="checkBoxContainer">
                                        <input class="checkBoxDesign commercialCheck" type="checkbox" data-percent="200" onchange="updatePrice(${price}, this)">Commercial: Content
                                    </div>
                                  
                                    <div class="textInCheck">+200%</div>
                                    <div class="checkBoxContainer"> 
                                        <input class="checkBoxDesign commercialCheck"  type="checkbox" data-percent="300" onchange="updatePrice(${price}, this)">
                                        Commercial: Merchandising
                                    </div>
                                
                                     <div class="textInCheck">+300%</div>
                                 </div>
                                 </div>   
                           
                                <div class="raspImageWrap">
                                    <div class="imageProfileWrap"><div class="imageProfile" ></div></div>
                                    <div class="profileHeadTextWrap">
                                        <div class="profileHeadText">Raspbunn</div>
                                        <div class="profileSubtext">@rcspbunn</div>
                                    </div>
                                </div>
                                <div class="messageRaspContainer">
                                    <div class="messageRasp">
                                        Thanks for considering me
                                        for your commission! Please only start a request if you find the service details and my Terms of Service acceptable.
                                    </div>
                                </div>
                        <div class="partThreeWrap">
                        
                        
                                <div class="privillegeDescription">
                                    <div class="topDescription">
                                        <h2 class="privillegeText">Includes</h2>
                                        <p class="privilegeDiscription"> 
                                            • &emsp; Bust up rendered piece
                                        </p>
                                    </div>
                                    <div class="middleDescription">
                                        <h2 class="privillegeText">
                                            Details
                                        </h2>
                                        <p class="privilegeDiscription">
                                            • &emsp; Will send jpeg and png

                                        </p>
                                    </div>
                                    <div class="bottomDescription">
                                        <h2 class="privillegeText">
                                            Important
                                        </h2>
                                        <p class="privilegeDiscription">
                                            • &emsp; NO REFUND
                                        </p>
                                        <p class="privilegeDiscription">
                                            • &emsp; 1-2 Weeks TAT
                                        </p>
                                    </div>

                                </div>

                                <div class="termsConditionOuter">
                                    <div class="termsConditionWrap">
                                         <h class=" termsTitle">౨ৎTERMS AND CONDITIONS౨ৎ</h>
                                    <div>
                                            <h1>DISCLAIMER</h1>
                                
                                            <p>• By purchasing my services (art), you automatically agree to the following conditions.</p>
                                            <p>• Please read this entirely and carefully. I will refuse your commission if you do not agree to these terms.</p>
                                            <p>• If you are not comfortable with my Terms of Service and/or are not willing to agree to the conditions, you may not request a commission.</p>
                                            <p>• I do not allow my art to be used for AI purposes and alike. Please do not upload it to any AI sites as this could compromise my artwork.</p>
                                            <p>• NFT usage is strictly forbidden.</p>
                                            <p>• If you have any questions, please contact me at rcspbunn@gmail.com</p>
                                        </div>
                                        <div> 
                                            <h1>USER AGREEMENT</h1>
                                            <p>
                                            By commissioning me, you agree that you have read and accepted all the terms described herein.
                                            You will agree here to the policy of using the art for personal, non-profit purposes unless otherwise stated, and provide all image credits to me.
                                            Violators will be added to my blacklist indefinitely and without warning.
                                            </p>
                                        </div>
                                            <h class="termsTitle">GENERAL STUFFS</h>
                                        <div>
                                

                                            <h1>CLIENT</h1>
                                            
                                            <p>• You, the Client, will be expected to first read my TOS and understand my general commission Prices.</p>
                                            <p>• You, the Client, may display my work on external sites as long as it is visibly credited and linked back to me.</p>
                                            <p>• You may not upload or host my work in any gallery that is intended to display your own work only.</p>
                                            <p>• You may not claim my work as your own.</p>
                                            <p>• Please only upload the smaller file publicly unless otherwise discussed.</p>
                                            <p>• You may use the Artwork for personal use including but not limited to: avatars, phone or computer wallpapers, and personal website/profile displays.</p>
                                            <p>• You reserve the right to print or create an otherwise physical reproduction of the Artwork as long as it is for your PERSONAL use only (ie. NOT for sale).</p>
                                            <p>• You may not use the Artwork for redistribution or external projects, commercial or non-commercial (i.e. t-shirts, mugs, public flyers, etc.) unless otherwise discussed.</p>
                                            <p>• In the case of an adoptable, you retain the rights to the character design.</p>
                                            <p>• You are NOT authorized to change, modify, edit or use my works without my permission.</p>
                                            <p>• You are NOT authorized to trace over my Artwork in any way, including the use of the artwork as a “base.”</p>
                                            <p>• Any harassment in an attempt to bargain for a commission (a ‘slot’) is not tolerated. This includes inappropriately worded comments on my profile, as well as private messages. I reserve the right to place anyone on the blacklist over harassment.</p>
                                            <p>• Clients who have commissioned and/or received work before this TOS has gone into effect are still bound to its contents.</p>
                                            <p>• These clients are permitted to include signatures and/or watermarks indicating the Artwork is my intellectual property. Credit in some form is required.</p>
                                            <p>• By placing an order, you agree to these terms and conditions. Please read these terms carefully.</p>
                                        </div>
                                        <div>   
                                        <h1>ARTIST</h1>
                                            
                                            <p>• By commissioning me, you are purchasing my service as an artist only.</p>
                                            <p>• I reserve the right to post your finished artwork in my gallery for any reason.</p>
                                            <p>• I reserve the right to decline any project or client for any reason.</p>
                                            <p>• I reserve the right to refund you the full amount paid if I no longer wish to work on your project for any reason.</p>
                                            <p>◆ I do not do the following:</p>
                                            <p>• R18, Furry, Heavy Mecha, Elderly, extreme bara, fetish art or anything else that makes me uncomfortable.</p>
                                        </div>
                                        <div>
                                            <h1>COMMERCIAL USER AGREEMENT</h1>
                                            
                                            <p>• If you, the Client, wish to order a commission for Commercial use, the total price of the commission, as well as any other royalties, will be agreed upon upfront.</p>
                                            <p>• The minimum price increase 100% of the original price, meaning double the end sum. However, I reserve the right to charge more if I deem fit.</p>
                                            <p>• The following cases are considered commercial use: Reproducing and selling the artwork, publicly or privately, cases where you receive profit from a medium/platform where you have posted my artwork, (eg. Patreon, YouTube, Twitch, a personal site, business cards etc).
                                            Tier Contents % Increase
                                            Tier 1 - Twitch/Youtube/Twitter promotion - 100%
                                            Tier 2 - Patreon content/business cards/ personal site - 200%
                                            Tier 3 - Reproducing/Selling/Merch - 300%
                                            </p>
                                        </div>
                                        <div>
                                            <h1>COPYRIGHT</h1>
                                    
                                            <p>• I reserve the right to sign and/or watermark my own work. I will send you a full resolution image (by email or via google docs), but my signature will remain on both the full resolution and smaller versions of the Artwork.</p>
                                            <p>• You are responsible for protecting your ownership over rights to a character design made by me by creating a copy image with your name added as well (ie. through a watermark) when uploading on external sites.</p>
                                            <p>• I retain all copyright over my work, which includes the right to redistribute, reproduce, or use the image as a sample for sales or self-promotion unless otherwise agreed upon. In the case of a Public Commission, I may do whatever I wish with the art (eg. post it to other sites such as Instagram) but will give proper credit to you for ownership of the character’s design.</p>
                                            <p>• In the case of a commission, I will not claim the rights to a character design unless it was one of my own designs. Therefore, I will not reuse/resell the Artwork for personal or commercial projects unless agreed upon.</p>
                                            <p>• In the case of an adoptable design, I will not reuse/resell the rights to the design once ownership is transferred to you, the Client.</p>
                                            NDA - Privacy request
                                        </div>
                                        <div>
                                            <p>• If you wish for your request to be private, it must be stated during the ordering process.</p>
                                            <p>• I reserve the right to charge a fee if I deem fit.</p>
                                            <p>• The privacy request entails that I am not allowed to share any WIPs on social media, nor am I allowed to stream the process of the commission anywhere.</p>
                                            <p>• However, this also means that you must refrain from sharing any such spoilers yourself.</p>
                                            <p>• This is especially important to consider if you are a Vtuber and want me to keep assets private until your debut.</p>
                                            <p>• The NDA fee usually starts at +5% of the total quote, but it might differ. The bigger the project the bigger the fee.</p>
                                        </div>
                                        <div>
                                            <h1>COMMISSIONS</h1>
                                            
                                            <p>• You will get a reply from me discussing the details (if needed) as well as me confirming your slot.</p>
                                            <p>• I reserve the right to make changes to your request as I see fit unless otherwise discussed. To guarantee the total accuracy of your commission request, please make note of the required details and elements in the form.</p>
                                            <p>• If your character is extremely detailed, I have the right to charge a fee to include these details. This fee will be stated before the transaction, and you hold the right to make changes to your commission request (eg. change the character, agree to simplified design changes) before the transaction is complete.</p>
                                            <p>• Please make your request concisely worded with minimal abbreviations, so as to make the note clear to read.</p>
                                            <p>• Any emails, private messages, and comments that you send must come in the following languages: English or Tagalog.</p>
                                            <p>• Before taking part in any transaction, you are required to wait for a reply so that we can discuss the details.</p>
                                            <p>• I will - after everything is processed and confirmed - send you an invoice. You need to confirm the payment with me before I start your order.</p>
                                            <p>• I usually take up to 3-5 days to respond to your initial order inquiry.</p>
                                            <p>• You reserve the right to set a deadline for your commission. This deadline must be disclosed prior to payment.</p>
                                            <p>• I have the right to decline a project if there is too short of a time allowance. I reserve the right to take up to 3 weeks to begin work on your project, and an additional 4 to work on said project.</p>
                                            <p>• If you did not alert me to a deadline, you must not send reminders until this 4 week's buffer period has passed. Reminders will be ignored if they relate to work that I have prioritized above your project, including other commissions and gift art.</p>
                                            <p>• If due dates are discussed, it is also the clients' responsibility to ensure prompt communication. I will not be held responsible for late delivery.</p>
                                            <p>• No harassment over my work speed will be tolerated, regardless of the time that has passed.</p>
                                            <p>• I will work on commissions randomly. This means I will work on the piece I'm the most inspired/ comfortable with at the moment.</p>
                                            <p>• You reserve the right to be notified of any delays.</p>
                                            <p>• I will send a WIP (‘work in progress’) image after 100% of the payment is completed.</p>
                                            <p>• These images will come in the form of .jpg or .png files as an attachment in the email or a DM.</p>
                                            <p>• The responsibility is on you to ensure your order contains the details you want me to follow.</p>
                                            <p>• I am not responsible for any unsatisfactory element of the finished design if no feedback was given to amend it.</p>
                                            <p>• I will only send a guaranteed WIP for the Sketch, but you are free to request a WIP at any given time.</p>
                                            <p>• Up to two major revisions can be made during the drafting phase of the commission. Only minor adjustments within reason can be made afterwards.</p>
                                            <p>• Each time I send a WIP to a client, I ask the client to provide feedback to me.</p>
                                            <p>• Changes will only be made at the sketch stage. Color corrections will be made at the color stage.</p>
                                            <p>• Any changes to the character or subject will be subject to a fee, and the fee will depend on the nature of the change.</p>
                                            <p>• I will not be held responsible for any changes in ownership of the said character.</p>
                                            <p>• After the order is completed, minor changes such as color adjustments are allowed if the missing or inaccurate elements are my faults (e.g., I overlooked details provided in the order).</p>
                                            <p>• In the absence of feedback from the customer, any changes to the final piece will be subject to a fee.</p>
                                            <p>• I will not redraw a completed commission unless payment is received for a second order.</p>
                                        </div>
                                        <div>    
                                            <h1>MODE OF PAYMENT</h1>
                                            
                                        
                                            <p>• I am not responsible for any mistakes that are made on your part over the course of the transaction.</p>
                                            <p>• will only accept PHP (Philippine Peso) or USD via Paypal or Gcash as payment. You are responsible for making currency conversions.</p>
                                            <p>• It is expected that you deposit 100% of the price upfront before I start. No exceptions.</p>
                                            <p>• After 100% of the payment is sent, I will start sketching. The Sketch will then be sent to you.</p>
                                            <p>• I will initiate the transaction to avoid accidental transactions. Do not send me any kind of payment until I have confirmed I can accept your commission AND have asked for payment.</p>
                                            <p>• Payments via Paypal/Gcash are sent via Invoice method only. I will cover the Paypal/Gcash fees as it is expected from the Artist per PayPal ToS. What you see is what you will have to pay.</p>
                                            <p>• I do not accept payment from shared PayPal accounts unless you are not of legal age and use a parent/guardian’s PayPal account.</p>
                                            <p>• If payment is not made in a timely manner (24H) after I've placed the Invoice, the commission will be cancelled.</p>
                                            <p>Repeated counts of commissioning a project and failing to pay will result in blacklisting.</p>
                                            <p>• For auctions, you are NOT allowed to retract your bid. On your first problematic transaction, you'll receive a simple verbal warning. The next time you back down from the auction you will be blacklisted and refused the opportunity to bid in the future. Only bid if you are sure you can pay your bidding.</p>
                                        </div>
                                        <div>
                                            <h1>PAYPAL/GCASH DISCLAIMER</h1>
                                    
                                            <p>• I can refund 100% of the payment only if I have not started working on the sketch.
                                            fees, taxes and/or transfer fees.</p>
                                            <p>• If we agree on a payment plan and I start the commission after the first deposit has been done, I will not refund your said deposit if you back out of the Payment Plan.</p>
                                        </div>   
                                        <div>
                                            <h1>CHARGEBACK</h1>
                                        
                                            <p>• You are NOT authorized to issue a chargeback for any reason.</p>
                                            <p>• If for any reason your PayPal/ Gcash account malfunctions or authorizes a refund request without your knowledge, you must contact me as soon as possible in order to resolve the issue.</p>
                                            <p>• You are required to contact me when you need to cancel a commission request.</p>
                                            <p>• Purposefully issuing a chargeback without contacting me to cancel/refund a project will result in immediate blacklisting for you as well as your email address, and anyone sharing your PayPal account, including side accounts.</p>
                                            <p>• Please note that all of my sales are "Digital Artwork" and it is the Artwork’s "Intellectual Property" that is purchased by you, the Client.</p>
                                            <p>• Nothing is ever intended by either me or the Client, to be physically shipped to them.</p>
                                            <p>• I am not required ever to ship any item unless it was explicitly discussed.</p>
                                        </div>
                                        <div>
                                            <h1>REFUNDS</h1>
                                            
                                            <p>• I can refund 100% of the payment only if I have not started working on the sketch.</p>
                                            <p>• Once I start the sketch there will be NO REFUNDS.</p>
                                            <p>• I can only refund around 80% if there are errors in PayPal/Gcash fees, taxes and/or transfer fees.</p>
                                            <p>• If I cancel a project, I will reimburse the lost fees and refund 100%.</p>
                                            <p>• If we agree on a payment plan and I start the commission after the first deposit has been done, I will not refund your said deposit if you back out of the Payment Plan.
                                            <strong>QUEUE / SCHEDULING / WORK SPEED / DEADLINES</strong></p>
                                        
                                            <p>• I usually take up to 2-3 days to respond to your initial order inquiry.</p>
                                            <p>• You reserve the right to set a deadline for your commission. This deadline must be disclosed prior to payment.</p>
                                            <p>• I have the right to decline a project if there is too short of a time allowance. I reserve the right to take up to 1 week to begin working on your project, and an additional 2 to work on said project.</p>
                                            <p>• If you did not alert me to a deadline, you must not send reminders until this 4 week's buffer period has passed. Reminders will be ignored if they relate to work that I have prioritized above your project, including other commissions and gift art.</p>
                                            <p>• If due dates are discussed, it is also the clients' responsibility to ensure prompt communication. I will not be held responsible for late delivery.</p>
                                            <p>• No harassment over my work speed will be tolerated, regardless of the time that has passed.</p>
                                            <p>• I will work on commissions randomly. This means I will work on the piece I'm the most inspired/ comfortable with at the moment.</p>
                                            <p>• You reserve the right to be notified of any delays.</p>
                                        </div>
                                        <div>
                                            <h1>RUSH FEE</h1>
                                        
                                            <p>• Rush fees are at least + 25% of the commission. Fees might vary depending on the project and the timeframe provided.</p>
                                            <p>• Estimated project start dates are on my commission page.</p>
                                            <p>• However, in some cases, I am able to accept a rush commission that would bring your queue up forward significantly.</p>
                                            <p>• Dates provided are subject to change, details are to be discussed should the client have set dates.</p>
                                        </div>
                                        <div>
                                            <h1>Revisions and Feedback</h1>
                                        
                                            <p>• I will send a WIP (‘work in progress’) image after 100% of the payment is completed.</p>
                                            <p>• These images will come in the form of .jpg or .png files as an attachment in the email or a DM.</p>
                                            <p>• The responsibility is on you to ensure your order contains the details you want me to follow.</p>
                                            <p>• I am not responsible for any unsatisfactory element of the finished design if no feedback was given to amend it.</p>
                                            <p>• I will only send a guaranteed WIP for the Sketch, but you are free to request a WIP at any given time.</p>
                                            <p>• Each time I send a WIP to a client, I ask the client to provide feedback to me.</p>
                                            <p>• Changes will only be made at the sketch stage. Color corrections will be made at the color stage.</p>
                                            <p>• I will not be held responsible for any changes in ownership of the said character.</p>
                                            <p>• After the order is completed, minor changes such as color adjustments are allowed if the missing or inaccurate elements are my faults (e.g., I overlooked details provided in the order).</p>
                                            <p>• I will not redraw a completed commission unless payment is received for a second order.</p>
                                        </div> 
                                        <div class="marginFinalP">
                                            <h1>FINAL PRODUCT</h1>
                                            
                                            <p>• There may be slight differences between the samples in my gallery and the illustration you will receive.</p>
                                            <p>• The commissioner must respect that my artistic style cannot be altered.</p>
                                            <p>• I reserve the right to reject critiques pertaining to artistic skill and stylization, and if the critique reduces the artistic quality of the piece.</p>
                                            <p>• Credit to me, the Artist, is required when you post or use it on another platform.</p>
                                            <p>• You, the Client, are responsible for saving any information, images, and other digital data I provide.</p>
                                            <p>• Any file you paid for will be available from me for a finite time only. I take measures to preserve most files for up to 3 months. However, I cannot guarantee against computer failure or accidental deletion or loss.</p>
                                            <p>• I am not required to post your project in any public space, and if posted, I am not required to keep it there indefinitely. I have the right to delete or remove any public project, even if you paid for it, as you should have your own copy for personal use.</p>
                                            <p>• Feedback of the final product is permitted after completion of the piece, through private messages or comments.</p>
                                            <p>• Any comments that are rude, inappropriate, inflammatory, and/or non-constructive may result in blacklisting.</p>
                                        </div>     
                                    </div>
                                </div>

                                <div class="acceptTermsWrap">
                                     <div class="checkBoxContainer">
                                        <input class="checkBoxDesign" type="checkbox" >
                                        <div class="acceptTermsText">Accept Rascpbunn's Terms and Service</div>
                                    </div>
                                </div>
                                <div class="acceptBtnWrap">
                                    <button class="acceptBtn" onclick="popUp()">
                                        Accept Terms to start request
                                    </button>
                                </div>

                            </div>
                        </div>
                    
                    </div>
                </div>
        
        </div>
     </div>`
    const alertW = pullRequest.querySelector('.alertW');
    const alertFront = pullRequest.querySelector('.alertFront');

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

}

/*function updatePrice(basePrice) {
    // 1. Grab all commercial checkboxes
    const checkboxes = document.querySelectorAll('.commercialCheck');
    let extraPercent = 0;

    // 2. Add up the percentage of every checked box
    checkboxes.forEach((box) => {
        if (box.checked) {
            extraPercent += Number(box.dataset.percent);
        }
    });

    // 3. Calculate total: Base Price + (Base Price * Extra %)
    // Example: +200% adds 2x basePrice (3x total); +300% adds 3x basePrice (4x total)
    const total = basePrice + (basePrice * (extraPercent / 100));

    // 4. Format with commas & 2 decimals and update the modal text
    const priceDisplay = document.getElementById('modalPrice');
    priceDisplay.textContent = total.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}*/

function updatePrice(basePrice, clickedBox) {
    const checkboxes = document.querySelectorAll('.commercialCheck');
    let extraPercent = 0;

    checkboxes.forEach((box) => {
        // Uncheck the other commercial box if a new one was just checked
        if (box !== clickedBox && clickedBox.checked) {
            box.checked = false;
        }
        if (box.checked) {
            extraPercent = Number(box.dataset.percent);
        }
    });

    const total = basePrice + (basePrice * (extraPercent / 100));
    document.getElementById('modalPrice').textContent = total.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function closePop(){

    const alertW = pullRequest.querySelector('.alertW');
    const alertFront = pullRequest.querySelector('.alertFront');

    if (!alertW || !alertFront) return;

    alertW.style.opacity = '0';
    alertFront.style.transform = 'translate(-50%, -45%) scale(0.95)';
    alertFront.style.opacity = '0';

    // Wait 300ms for the fade-out transition to finish before removing the modal
    setTimeout(() => {
        pullRequest.innerHTML = '';
    }, 300);

   
     
 }