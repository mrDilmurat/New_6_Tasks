// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS

// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }
//==============================================
// let btnDark = document.querySelector('#dark')
// let btnLight = document.querySelector('#light')

// btnDark.addEventListener('click', e => {
//     console.log('hello');
//     document.body.classList.add('dark');
// })

// btnLight.addEventListener('click', e => {
//     document.body.classList.add('light');
// })

// 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена)

// let product = document.querySelector('.product');
// let list = document.querySelector('ul');

// product.addEventListener('click', e => {
//     let user = prompt()
// })

// let item = document.querySelector('ul');

// while(true) {
//     let productName = prompt('Имя продукта');
//     let productPrice = prompt('Цена продукта');
//     let list = `<li>${productName}: ${productPrice}</li>`
//     item.innerHTML += list;
//     let add = confirm('вы еще хотите добавить');
//     if(!add) {
//         break;
//     };
// };

// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие)

// let addImg = document.querySelector('#add-image');
// let addBlock = document.querySelector('#add-block');

// addImg.addEventListener('click', e => {
//     let ask = prompt('Enter link, width and height with space between them');
//     ask = ask.split(' ')

//     let img = document.createElement('img')
//     document.body.append(img);

//     img.src = ask[0]
//     img.style.width = ask[1] + "px"
//     img.style.height = ask[2] + "px"

//     // img.width = ask[1]
//     // img.height = ask[2]
// })

// addBlock.addEventListener('click', e => {
//     let ask = prompt('Enter color, width and height with space between them');
//     ask = ask.split(' ')

//     let div = document.createElement('div')
//     document.body.append(div);

//     div.style.backgroundColor = ask[0]
//     div.style.width = ask[1] + "px"
//     div.style.height = ask[2] + "px"
// })

// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ)

let db = [
  {
    title: "Samsung S10",
    category: "electronics",
    price: 700,
    desc: "Super phone for your life!",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
  },
  {
    title: "iPhone 13 Pro",
    category: "electronics",
    price: 1100,
    desc: "One of the most powerful cameras!",
    img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
  },
  {
    title: "Apple",
    category: "fruits",
    price: 2,
    desc: "Healthy fruit that is used in many dishes and desserts.",
    img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
  },
  {
    title: "Orange",
    category: "fruits",
    price: 7,
    desc: "Fruit for one of the most popular types of juice.",
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
  },
  {
    title: "Audi R8",
    category: "cars",
    price: 98000,
    desc: "A sports car that can reach tremendous speed.",
    img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
  },
];

// let container = document.getElementById("products-container");

// db.forEach((product) => {
//   let productDiv = document.createElement("div");
//   productDiv.innerHTML = `
//       <img src="${product.img}">
//       <p>${product.title}</p>
//       <p>${product.category}</p>
//     `;
//   container.appendChild(productDiv);
// });

// function filterProducts() {
//   let selectedCategory = prompt("Select a category");

//   let filteredProducts = db.filter(
//     (product) => product.category === selectedCategory
//   );

//   container.innerHTML = "";

//   filteredProducts.forEach((product) => {
//     let productDiv = document.createElement("div");

//     productDiv.innerHTML = `
//         <img src="${product.img}">
//         <p>${product.title}</p>
//         <p>${product.category}</p>

//       `;
//     container.appendChild(productDiv);
//   });
// }

// let list = document.querySelector("ul");
// let btn = document.querySelector("#filter");
// let render = document.querySelector("#render");

// function show() {
//     list.innerHTML = "";
//     db.forEach((item) => {
//     let li = document.createElement("li");
//     list.append(li);
//     li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}`;
//     let img = document.createElement("img");
//     li.append(img);
//     img.src = item.img;
//     img.width = 100;
//     img.height = 100;
//     });
// }

// show();

// btn.addEventListener("click", (e) => {
// let ask = prompt("Какая категория вам нужна?");
// list.innerHTML = "";
// db.forEach((item) => {
//     if (item.category == ask) {
//     let li = document.createElement("li");
//     list.append(li);
//     li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}`;
//     let img = document.createElement("img");
//     li.append(img);
//     img.src = item.img;
//     img.width = 500; 
//     img.height = 500;
//     }
//     });
// });

// render.addEventListener("click", (e) => {
//     show();
// });


// let ul = document.querySelector('ul') 

//     function render(category='all'){ 
//         let filterdb = JSON.parse(JSON.stringify(db)) 
//         if(category !== 'all'){ 
//             filterdb =filterdb.filter(item =>{ 
//                 return item.category == category 
//             }) 
//         } 
//         ul.innerHTML =''; 
// filterdb.forEach(item =>{ 
//     ul.innerHTML +=`<li>${item.title}, ${item.category},<img src=${item.img} width='100' height='100' alt="error"></li>` 
// }) 
//     } 
//     render() 

//     let but = document.querySelector('#btn') 
//     but.addEventListener('click', e =>{ 
//         let list = prompt('какойе категорие') 
//     render(list) 
//     }) 
//     let but2 = document.querySelector('#btn1') 
//     but2.addEventListener('click', e=>{ 
//         render() 
//     })



// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым


//let addProductButton = document.getElementById("add-product");
//let productList = document.getElementById("product-list");

//addProductButton.addEventListener("click", function () {
//   let name = document.getElementById("name").value;
//   let price = document.getElementById("price").value;
//   let image = document.getElementById("image").value;

//   let productCard = document.createElement("div");
//   productCard.innerHTML = `
//        <img src="${image}" alt="${name}">
//        <h3>${name}</h3>
//        <p>Price: $${price}</p>
//    `;
//   if (price < 100) {
//      productCard.getElementsByTagName("p")[0].style.color = "red";
//   } else {
//      productCard.getElementsByTagName("p")[0].style.color = "green";
//   }

//   productList.appendChild(productCard);
//});





// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), при отправки заполненной формы автоматически должны быть пустыми также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)


var addUserButton = document.getElementById("add-user");
var userList = document.getElementById("user-list");
var sendMessageButton = document.getElementById("send-message");

var userId = 0;
var users = [];

addUserButton.addEventListener("click", function () {
   var name = document.getElementById("name").value;
   var password = document.getElementById("password").value;
   var age = document.getElementById("age").value;

   var user = {
      id: userId,
      name: name,
      password: password,
      age: age,
      mailing: false
   };
   users.push(user);
   userId++;

   var userDiv = document.createElement("div");
   userDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <label>Subscribe to Mailing List: <input type="checkbox"></label>
    `;

   userList.appendChild(userDiv);
});

sendMessageButton.addEventListener("click", function () {
   var subscribedUsers = users.filter(function (user) {
      return user.mailing === true;
   });

   subscribedUsers.forEach(function (user) {
      console.log("Sending message to " + user.name);
   });
});

userList.addEventListener("change", function (event) {
   var checkbox = event.target;
   var userId = checkbox.parentNode.parentNode.getAttribute("data-user-id");
   var user = users.find(function (user) {
      return user.id === userId;
   });
   user.mailing = checkbox.checked;
});
