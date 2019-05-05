 const requestData = (url, functionHandler) =>{
        fetch(url)
        .then(response =>{
            if(response.ok){
                  return response.json();
            }
            throw new Error("Response in not OK");
            })
        .then(functionHandler)
        .catch(error => console.log(error.message));
 }

 const list = document.querySelector("#pokemons-list");
 const picture = document.querySelector("#img-holder");
 const name = document.querySelector("#name");
 const weight = document.querySelector("#weight");
 const height = document.querySelector("#height");
 const types = document.querySelector("#types");
 const nextButton = document.querySelector("#next-button");
 const prevButton = document.querySelector("#prev-button");



 const showDetails = data => {
     let typesArray = data.types;
     let getTypes = typesArray.map(object => object.type.name);
     name.textContent = `Name: ${data.name}`;
     height.textContent = `Height: ${data.height}`;
     weight.textContent = `Weight: ${data.weight}`;
     types.textContent = `Types: ${getTypes.join(" ")}`;
     const createPicture = document.createElement("img");
     createPicture.src = data.sprites.front_default;
     if(picture.children.length > 0){
        let firstPic = document.getElementsByTagName("img")[0];
        firstPic.setAttribute("src" , data.sprites.front_default);
     }
     else{
        picture.appendChild(createPicture);
     }
 }

 const createList = data => {
     data.results.map(pokemon =>{
         const listItem = document.createElement("li");
         listItem.innerText = pokemon.name;
         listItem.addEventListener("click", function(event){
             const detailsUrl = pokemon.url;
             requestData(detailsUrl, showDetails);
         });
         return listItem;
     })
     .forEach(item =>list.appendChild(item));
     giveButtonsData(data);
 }

 const giveButtonsData = data => {
        let nextData = data.next;
        let prevData = data.previous;
        nextButton.addEventListener("click", function(event){  
            console.log(nextData);
            while(list.firstChild){
                list.removeChild(list.firstChild);
            }
            requestData(nextData, createList);
        });

        prevButton.addEventListener("click", function(event){
            console.log(prevData);

            while(list.firstChild){
                list.removeChild(list.firstChild);
            }
            requestData(prevData, createList);
        });
}

 requestData("https://pokeapi.co/api/v2/pokemon/", createList)
 