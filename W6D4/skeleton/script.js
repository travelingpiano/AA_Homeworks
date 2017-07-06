document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const button = document.getElementsByClassName("favorite-submit");
  const ul = document.getElementById("restaurants");

  button[0].addEventListener("click",event=>{
    event.preventDefault();
    const newitem = document.getElementsByClassName("favorite-input")[0];
    const li = document.createElement("li");
    li.textContent = newitem.value;
    li.addEventListener("click",toggleLi);
    ul.appendChild(li);
    newitem.value = "";
  });

  // adding new photos
  const togglebutton = document.getElementsByClassName("photo-show-button");
  togglebutton[0].addEventListener("click",event=>{
    event.preventDefault();
    const photocontainer = document.getElementsByClassName("photo-form-container")[0];
    console.log(photocontainer);
    if(photocontainer.classList[1] == "hidden"){
      photocontainer.classList.remove("hidden");
    }else{
      photocontainer.classList.add("hidden");
    }
  });
  // --- your code here!
  document.getElementsByClassName("photo-url-submit")[0].addEventListener("click",event=>{
    event.preventDefault();
    const dogimage = document.getElementsByClassName("photo-url-input")[0];
    const img = document.createElement("img");
    img.src = dogimage.value;
    const newdogitem = document.createElement("li");
    newdogitem.append(img);
    const doglist = document.getElementsByClassName("dog-photos")[0];
    doglist.appendChild(newdogitem);
  });


});
