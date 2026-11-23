<<<<<<< HEAD
let indicator = document.querySelector('.indicator');
let cardContainer = document.querySelector('.cardContainer');


/*  <!--    <div data-category="" class="card cardLarge"><img class="imgFormat" src="portfolio/1-large.jpg" id="">
                        
                        </div>
                        <div data-category="" class="card cardSmall"><img src="portfolio/4-small.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/11-medium.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardLarge"><img src="portfolio/2-large.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/12-medium.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardSmall"><img src="portfolio/6-small.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardSmall"><img src="portfolio/7-small.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/5 - Medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardLarge"><img src="portfolio/3-large.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/9-medium.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardSmall"><img src="portfolio/8-small.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/10-large.jpg" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/13-Medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/14-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/15-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/16-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/17-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/18-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/19-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/20-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/21-medium.png" alt="" class="imgFormat">
                        
                        </div>
                        <div data-category="" class="card cardMedium"><img src="portfolio/22-medium.png" alt="" class="imgFormat">
                        
                        </div>
                    -->
                    -->*/

let product = [{
        id : 1 ,
        categoryId : 3,
        image : 'portfolio/1-large.jpg',
        cardSize : 'cardLarge'

    },
    {
        id : 2 ,
        categoryId : 2,
        image : 'portfolio/4-small.jpg',
        cardSize : 'cardSmall'

    },
    {
        id: 3,
        categoryId : 3,
        image: 'portfolio/11-medium.jpg',
        cardSize: 'cardMedium'
    },
    {
        id: 4,
        categoryId : 3,
        image: 'portfolio/2-large.jpg',
        cardSize: 'cardLarge'
    },
    {
        id: 5,
        categoryId : 3,
        image: 'portfolio/12-medium.jpg',
        cardSize: 'cardMedium'
    },
    {
        id: 6,
        categoryId : 5,
        image: 'portfolio/6-small.png',
        cardSize: 'cardSmall'
    },
    {
        id: 7,
        categoryId : 2,
        image: 'portfolio/7-small.png',
        cardSize: 'cardSmall'
    },
    {
        id: 8,
        categoryId : 4,
        image: 'portfolio/5 - Medium.png',
        cardSize: 'cardLarge'
    },
    {
        id: 9,
        categoryId : 4,
        image: 'portfolio/3-large.jpg',
        cardSize: 'cardLarge'
    },
    {
        id: 10,
        categoryId : 4,
        image: 'portfolio/9-medium.jpg',
        cardSize: 'cardLarge'
    },
    {
        id: 11,
        categoryId : 4,
        image: 'portfolio/8-small.png',
        cardSize: 'cardSmall'
    },
    {
        id: 12,
        categoryId : 3,
        image: 'portfolio/10-large.jpg',
        cardSize: 'cardLarge'
    },
    {
        id: 13,
        categoryId : 5,
        image: 'portfolio/13-Medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 14,
        categoryId : 5,
        image: 'portfolio/14-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 15,
        categoryId : 2,
        image: 'portfolio/15-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 16,
        categoryId : 4,
        image: 'portfolio/16-medium.png',
        cardSize: 'cardLarge'
    },
    {
        id: 17,
        categoryId : 5,
        image: 'portfolio/17-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 18,
        categoryId : 4,
        image: 'portfolio/18-medium.png',
        cardSize: 'cardLarge'
    },
    {
        id: 19,
        categoryId : 5,
        image: 'portfolio/19-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 20,
        categoryId : 5,
        image: 'portfolio/20-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 21,
        categoryId : 2,
        image: 'portfolio/21-medium.png',
        cardSize: 'cardMedium'
    },
    {
        id: 22,
        categoryId : 4,
        image: 'portfolio/22-medium.png',
        cardSize: 'cardLarge'
    }

];

let arrayButton =[{
    id : 1,
    name : 'All'
},
{
    id : 2 ,
    name : 'Bust'
},
{
    id : 3,
    name : 'Half-Body'
},
{
    id : 4,
    name : 'Yume Ship / Couple Full Body'
},
{
    id : 5,
    name : 'Chibi'
}

];

const filter = [... new Set(arrayButton.map((arrayButton) => {return arrayButton}))];

indicator.innerHTML =  filter.map((arrayButton)=>{
    let {id , name} = arrayButton;

     let isActive = id === 1 ? 'activeFilter' : '';

    return (   `
            <button  class ="filterBtn ${isActive}"  data-id="${id}" onclick = "filterItems(${id})">${name}</button>
        `);
}).join('');

indicator.addEventListener('click', (e)=>{
     const clickedBtn = e.target.closest('.filterBtn');
    if (!clickedBtn) return;

    // Remove 'activeFilter' from ALL buttons
    document.querySelectorAll('.filterBtn').forEach((btn) => {
        btn.classList.remove('activeFilter');
    });

    // Add 'activeFilter' ONLY to the clicked button
    clickedBtn.classList.add('activeFilter');

    // Get the button's ID and filter the gallery
    const selectedId = Number(clickedBtn.dataset.id);
    filterItems(selectedId);
});

const category = [...new Set(product.map((item) => {return item}))];

const filterItems = (selectedId) =>{
    
     if (selectedId === 1) {
        displayItems(product);
        return;
    }

    const filtered = product.filter((item) => item.categoryId === selectedId);
    displayItems(filtered);

}



/*const displayItems = (itemList) =>{
    cardContainer.innerHTML = itemList.map((item)=>{
        let { id, image, cardSize} = item;

        return `<div data-category="" class="card ${items.cardSize}"><img class="imgFormat" src="${items.image}" id="${items.id}">

                        </div>`;
        }).join('');
        
    };*/

const displayItems = (itemList) => {
    cardContainer.innerHTML = itemList.map((item) => {
        let { id, image, cardSize } = item;
        return `<div data-category="" class="card ${cardSize}">
                    <img class="imgFormat" src="${image}" id="${id}">
                </div>`;
    }).join('');
};



displayItems(category);
=======

function popUp(){
    const pop = document.querySelector('.alert');

    pop.innerHTML = `  <div class="alertW">
                <div class="alertFront">
                <h class=" nameBrand color margin">HELLO</h>
                </div>
            </div>`;
}


let indicator = document.querySelector('.indicator');
let items = document.querySelector('.cardContainer');
>>>>>>> main
