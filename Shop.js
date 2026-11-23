const displayItems = document.querySelector('.cardContainer');

let shopProduct = [
    {
    id: 1,
    name: 'chibi',
    priceTag : 'PHP 2,700.00+',
    image: 'portfolio/6-small.png' ,
    description: 'Gourmet Sweet Chibi Adorable',
    bookmark: 'on',
    oneOfKind : 'on'
    },
    
    {
    id: 2,
    name: 'chibi',
    priceTag : 'PHP 2,000.00+',
    image: 'portfolio/17-medium.png' ,
    description: 'Decora Kei Chibi Adoptable',
    bookmark: 'on',
    oneOfKind : 'on'
    },
   
    {
    id: 3,
    name: 'chibi',
    priceTag : 'PHP 1,600.00+',
    image: 'portfolio/19-medium.png' ,
    description: 'Pink and Black Streak Hair Chibi Adopt',
    bookmark: 'on',
    oneOfKind : 'on'
    },
    
    {
    id: 4,
    name: 'chibi',
    priceTag : 'PHP 1,60000+',
    image: 'portfolio/18-medium.png' ,
    description: 'Kitsune Tophat Chibi Adaptable',
    bookmark: 'on',
    oneOfKind : 'on'
    },

    {
    id: 5,
    name: 'chibi',
    priceTag : 'PHP 1,600.00+',
    image: 'portfolio/20-medium.png' ,
    description: 'Dessert Chibi Adoptable',
    bookmark: 'on',
    oneOfKind : 'on'
    },

    {
    id: 6,
    name: 'chibi',
    priceTag : 'PHP 1,600.00+',
    image: 'portfolio/21-medium.png' ,
    description: 'Humanoid Spider Chibi Adopt',
    bookmark: 'on',
    oneOfKind : 'on'
    },

    {
    id: 7,
    name: 'chibi',
    priceTag : 'PHP 1,600.00+',
    image: 'portfolio/13-Medium.png' ,
    description: 'Winged Pastel Bunny Chibi Adoptable',
    bookmark: 'on',
    oneOfKind : 'on'
    },

    {
    id: 6,
    name: 'chibi',
    priceTag : 'PHP 3,200.00+',
    image: 'portfolio/15-medium.png' ,
    description: 'Pastel Alien & Humanoid Croissant Chibi Adopts',
    bookmark: 'on',
    oneOfKind : 'on'
    }
    

];



{displayItems.innerHTML = shopProduct.map((items)=>{
    let { id,name, priceTag, description,bookmark, oneOfKind,image} = items;
    let bookMarkHtml = bookmark === 'on' ? ` <div class="bookMark">
                                    <svg class="bookMarkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M5,21V5Q5,4.17 5.59,3.59T7,3H17q0.82,0 1.41,0.59T19,5V21l-7-3L5,21Zm2-3.05l5-2.15l5,2.15V5H7V17.95ZM7,5H17H12H7Z"/></svg>
                                </div> `: '';
    let oneOfkindHtml = oneOfKind === 'on' ? ` <div class="oneOfKind">
                                   <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M21.3,18.7l-3-3l1.4-1.4l3,3l-1.4,1.4Zm-3.6-12L16.3,5.3l3-3l1.4,1.4l-3,3ZM6.3,6.7l-3-3L4.7,2.3l3,3L6.3,6.7Zm-3.6,12L1.3,17.3l3-3l1.4,1.4l-3,3Zm6.15-1.88L12,14.93l3.15,1.93l-0.82-3.6l2.78-2.4l-3.65-0.33L12,7.13L10.55,10.5L6.9,10.83l2.78,2.43L8.85,16.83ZM5.83,21l1.63-7.03L2,9.25L9.2,8.63L12,2l2.8,6.63L22,9.25l-5.45,4.72L18.18,21L12,17.27L5.83,21ZM12,11.98Z"/></svg>
                                    <p>1 of a kind</p>
                                </div>`: '';


    return `<div class="card cardShop">
                            <img class="imgFormat" src="${image}" alt="">
                               ${oneOfkindHtml}
                               ${bookMarkHtml}
                            <div class="priceWrapper">
                                <div class="textWrapper">
                                    <div class="priceText">${description}</div>
                                    <div class="priceTag">${priceTag}</div>
                                </div>
                            </div>
                        </div>`;

}).join('');}

