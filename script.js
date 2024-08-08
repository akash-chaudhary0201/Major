// Typing Text

let text = document.querySelector(".sec-text")

        let  textlaod = () => {
            setTimeout(() => {
                text.innerHTML = "&nbsp;Timeless Tales"
            }, 0);
            setTimeout(() => {
                text.innerHTML = "&nbsp;Pre-Loved Books"
            }, 4000);
            setTimeout(() => {
                text.innerHTML = "&nbsp;Second-Hand Books"
            }, 8000);
        }
        textlaod()
        setInterval(textlaod, 12000)


// accordion menu
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    if (item.classList.contains("active")) {

      item.classList.remove("active");
      content.style.display = "none";
    } else {

      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector(".accordion-content");
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherContent.style.display = "none";
        }
      });


      item.classList.add("active");
      content.style.display = "block";
    }
  });
});

console.log("Hello Akash");
 

// Books Searching :- 

document.addEventListener('DOMContentLoaded', function () {
  const bookRows = document.querySelectorAll('.books-info .books-info-row-1, .books-info .books-info-row-2');

  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  function filterBooks() {
      const searchTerm = searchInput.value.toLowerCase();
      bookRows.forEach(row => {
          let hasVisibleBooks = false;
          const bookContents = row.querySelectorAll('.books-content');

          bookContents.forEach(bookContent => {
              const titleElement = bookContent.querySelector('.title h2');
              const bookTitle = titleElement.textContent.toLowerCase();
              if (bookTitle.includes(searchTerm)) {
                  bookContent.style.display = 'block';
                  hasVisibleBooks = true;
              } else {
                  bookContent.style.display = 'none';
              }
          });

          row.style.display = hasVisibleBooks ? 'flex' : 'none';
      });
  }

  searchButton.addEventListener('click', filterBooks);

  searchInput.addEventListener('keyup', filterBooks);
});


// Functionong of add to cart button :-

  function updateCartCounter() {
    const cartCounter = document.querySelector(".counter");
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCounter.textContent = `(${cartCount})`;
  }

  function addToCart() {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount += 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCounter();
  }

  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  updateCartCounter();

