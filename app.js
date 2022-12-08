const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      " https://rasamalaysia.com/wp-content/uploads/2014/01/dan-dan-mian-thumb.jpg " ,
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// let buttonDOM = document.querySelector(".btn-container");
// let buttonArray = ['All', 'Korea', 'Japan', 'China'];

// buttonArray.forEach((value, index) => {
//   let buttons = document.createElement('button');
//   buttons.id = value;
//   buttons.innerText = value;
//   buttons.classList = 'btn-item btn btn-outline-dark d-inline';

//   const buttonLocation = document.querySelector('.btn-container')
//   buttonLocation.appendChild(buttons)
// });

// let allBtn = document.querySelector('#All');
// let koreaBtn = document.querySelector('#Korea')
// let japanBtn = document.querySelector('#Japan')
// let chinaBtn = document.querySelector('#China')

// allBtn.addEventListener('click', click)
// koreaBtn.addEventListener('click', click)
// japanBtn.addEventListener('click', click)
// chinaBtn.addEventListener('click', click)

// // function all menu
// function array(allMenuName){
//   allMenuName.map(index => {
//     let menuDOM = document.querySelector('.section-center');

//     let divGenel = document.createElement('div')
//     divGenel.classList = 'menu-items col-6'
//     menuDOM.appendChild(divGenel);

//     let images = document.createElement("img")
//     images.classList = 'photo';
//     images.src = index.img;
//     divGenel.appendChild(images);

//     let info = document.createElement('div')
//     info.classList = 'menu-info';
//     divGenel.appendChild(info);

//     let divTitle = document.createElement('div')
//     divTitle.classList = 'menu-title';
//     info.appendChild(divTitle);

//     let title = document.createElement('h4')
//     let price = document.createElement('h4');
//     title.innerHTML = index.title;

//     price.classList = 'price';
//     price.innerHTML = index.price;
//     divTitle.appendChild(title);
//     divTitle.appendChild(price);

//     let text = document.createElement('div');
//     text.classList = 'menu-text';
//     text.innerHTML = index.desc;
//     info.appendChild(text);

//   })
// }
// // categories 

// let categories = 'category';
// object = menu.reduce((obj, elements) => {
//   let key =  elements[categories]

//   if(!obj[key]){
//     obj[key] = []
//   } 
//   obj[key].push(elements)
//   return obj
// }, {});

 
// let body = document.querySelector('.section-center')
// function click(){
//   while(body.hasChildNodes()){
//     body.removeChild(body.firstChild)
//   }
//   ;
//   if(this.id == 'All'){
//     array(menu)
//   }else if (this.id == 'Korea'){
//     array(object.Korea)
//   }else if(this.id == 'Japan'){
//     array(object.Japan)
//   }else if(this.id == 'China'){
//     array(object.China)
//   }
// }


// button and menu 

const buttonDOM = document.querySelector(".btn-container");
const menus = document.querySelector(".section-center");

// buttons

const createButtons = () => {
  let buttons = `
    <button id = "all" class = "btn btn-outline-dark btn-item" type="button">All</button>
    <button id ="korea" class="btn btn-outline-dark btn-item" type="button">Korea</button>
    <button id ="japan" class="btn btn-outline-dark btn-item" type="button">Japan</button>
    <button id ="china" class="btn btn-outline-dark btn-item" type="button">China</button>
  `
  buttonDOM.innerHTML = buttons;
}
createButtons();

// Create foods
const createFoods = (food) => {
  let html = ` 
    <div class = "menu-items col-lg-6 col-sm-12">
      <img class ="photo" src=" ${food.img} " alt="${food.title}">
        <div class ="menu-info">
        <div class = "menu-title">
        <h4>${food.title}</h4>
        <h4 class ="price">${food.price}</h4>
        </div>
        <div class= "menu-text">${food.desc}</div>
      </div>
     </div> 
  `
  return html;
}

// all foods 
const listAllFoods = () => {
  let allFoods = "";

  menu.map(item => {
    allFoods += createFoods(item)
  })
  menus.innerHTML = allFoods;
}
document.addEventListener("DOMContentLoaded", listAllFoods);

// korea foods

const listKFoods = () =>{
  let koreaFoods = "";

  menu.map(item => {
    if(item.category == "Korea") {
      koreaFoods += createFoods(item)
    }
    })
    menus.innerHTML = koreaFoods;
}
document.getElementById('korea').addEventListener("click", listKFoods);

// japan foods
const listJFoods = () =>{
  let japanFoods = "";

  menu.map(item => {
    if(item.category == "Japan") {
      japanFoods += createFoods(item)
    }
    })
    menus.innerHTML = japanFoods;
}
document.getElementById('japan').addEventListener("click", listJFoods);

// CHİNA 
const listCFoods = () =>{
  let chinaFoods = "";

  menu.map(item => {
    if(item.category == "China") {
      chinaFoods += createFoods(item)
    }
    })
    menus.innerHTML = chinaFoods;
}
document.getElementById('china').addEventListener("click", listCFoods);

document.getElementById("all").addEventListener("click",listAllFoods);