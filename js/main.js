//set slider

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//render people cards

const cardsContainer = document.querySelector('.card-container');

function renderPeople(){
    people.forEach((person)=>{
        cardsContainer.innerHTML += `
        <li class="description-card user-card" data-filter="${person.ability}">
            <div class="description-card_header">
                <img class='user-image'
                    src="${person.imgSrc}"
                    alt="image"
                />
                <h3>${person.name}</h3>
            </div>
            <div class="description-body">
                <span class="user-ability">${person.ability}</span>
                <p>
                    ${person.description}
                </p>
            </div>
      </li>
        `;
    });
}

renderPeople();

//filter abilities

const filters = document.querySelectorAll('.filter');

filters.forEach((filter)=>{

    filter.addEventListener('click',function(){

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.card-container .user-card:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.card-container [data-filter='${selectedFilter}']`);

        if(selectedFilter == 'All'){
            itemsToHide = []
            itemsToShow = document.querySelectorAll('.card-container [data-filter]');
        }
    
        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
          });
      
          itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show'); 
          });
    });
});