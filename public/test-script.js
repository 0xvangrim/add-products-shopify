console.log("This is coming from Script-tag js");

const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
script.type = "text/javascript";
script.onreadystatechange = handler;
script.onload = handler;

document.getElementsByTagName("head")[0].appendChild(script);

function handler() {
  const header = $("header.site-header").parent();

  /*const makeHeader = (data) => {
    header
      .prepend(`<div>${data}</div>`)
      .css({ "background-color": "orange", "text-align": "center" });
  };
  */

  const body = $('body');

  body.css({
      'position': 'relative'
  })

  const shop = Shopify.shop;

  const makeApp = products => {
      const bestSellerContainer = $(
          `<div>
          <h3>Our Best Sellers</h3>
          </div>`
      )
      .css({
          'position': 'fixed',
          'background-color': '#ffffff',
          'border': '1px solid black',
          'bottom': '80px',
          'right': '25px',
          'height': '400px',
          'width': '350px',
          'display': 'none'
      });

      const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png?v=1584741923')
      .css({
          'position': 'fixed',
          'width': '150px',
          'bottom': '20px',
          'right': '20px',
          'cursor' : 'pointer'
      });

      body.append(bestSellerButton)
      body.append(bestSellerContainer)

      bestSellerButton.click(() => {
          bestSellerContainer.slideToggle()
      });
  }

  fetch(
    "https://cors-anywhere.herokuapp.com/https://f8a5f170254e.ngrok.io/api/products?shop=sample-test-store-for-script-api.myshopify.com/"
  )
    .then((res) => res.json())
    .then((data) =>  
    makeApp(data.data))
    .catch((error) => console.error(error));
}
