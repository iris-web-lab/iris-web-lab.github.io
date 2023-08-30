// JavaScript code for the product cards generation
      // Create an empty array of product objects
      var products = [];

      // Get data from the sheet and store it in the products array
      function getDataFromSheet() {
        fetch(sheetProduct)
          .then(response => response.text())
          .then(text => {
            var json = JSON.parse(text.substr(47).slice(0, -2));
            var rows = json.table.rows;
            for (var i = 0; i < rows.length; i++) {
              var row = rows[i].c;
              // Create a product object from the row data
              var product = {
                name: row[0].v,
                image: row[1].v,
                price: row[2].v,
                description: row[3].v,
                id: row[4].v
              };
              // Push the product object to the products array
              products.push(product);
            }
            createProductCards();
          });
      }

      // Loop through the array and create a card element for each product
      function createProductCards() {
        for (var i = 0; i < products.length; i++) {
          // Create a div element with the class "card"
          var card = document.createElement("div");
          card.className = "card";
          // Create an img element with the src attribute set to the product image
          var img = document.createElement("img");
          img.src = products[i].image;
          // Create an h3 element with the innerText set to the product name
          var h3 = document.createElement("h3");
          h3.innerText = products[i].name;
          // Create a p element with the innerText set to the product price
          var p1 = document.createElement("p");
          p1.innerText = products[i].price;
          // Create another p element with the innerText set to the product description
          var p2 = document.createElement("p");
          p2.innerText = products[i].description;
          // Create a button element with the innerText set to "Buy Now"
          var button = document.createElement("a");
          button.innerText = "Buy Now";
          button.href = "pages/product.html?=" + products[i].id
          // Append the img, h3, p1, p2, and button elements to the card element
          card.appendChild(img);
          card.appendChild(h3);
          card.appendChild(p1);
          card.appendChild(p2);
          card.appendChild(button);
          // Append the card element to the container element
          document.querySelector(".container").appendChild(card);
        }
      }

      // Call the getDataFromSheet function when the window loads
      window.onload = getDataFromSheet;