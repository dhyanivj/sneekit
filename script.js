let searchBtn = document.getElementById("preview");
let searchterm = document.getElementById("search");
searchBtn.addEventListener("click", () => {
  let weburl = searchterm.value;
  let dataURL = `http://api.linkpreview.net/?key=d4f385ede84a5fb315274d4a1393630e&q=${weburl}`;
  // console.log(dataURL);  
  fetch(dataURL)     
    .then((response) => response.json())  
    .then((data) => { 
        // console.log(data.description);
        // console.log(data.url);
        // console.log(data.title);
        // console.log(data.image);
      result.innerHTML = `
      <div class="box mt-5 p-4">
      <div class="d-flex">
        <div >
          <div class="mr-2">
          <img src="${data.image}" alt="logo" class="web-logo " />
          </div>
        </div>
        <h4>${data.title}</h4>
      </div>
      <div class="web-description grey">
       ${data.description}
      </div>
      <div class="d-flex mt-2">
        <img src="./photos/link-front-color.png" alt="" class="web-linkLogo mr-2 " />
        <div class="web-link">
        <a href="${data.url}" class="visit-link">Visit Page  </a>
        </div>
      </div>
    </div>
      `;
    })
    .catch(() => {
      if (weburl.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid URL.</h3>`;
      }
    });
});