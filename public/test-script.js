console.log("This is coming from Script-tag js");

const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
script.type = "text/javascript";
script.onreadystatechange = handler;
script.onload = handler;

document.getElementsByTagName("head")[0].appendChild(script);

function handler() {
  const header = $("header.site-header").parent();

  const makeHeader = (data) => {
    header
      .prepend(`<div>${data}</div>`)
      .css({ "background-color": "orange", "text-align": "center" });
  };

  fetch(
    "https://cors-anywhere.herokuapp.com/https://f8a5f170254e.ngrok.io/api/products?shop=sample-test-store-for-script-api.myshopify.com/"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    //makeHeader(data.data))
    .catch((error) => console.error(error));
}
