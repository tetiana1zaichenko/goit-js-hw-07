const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`)
items.forEach((item) => {
    const title = item.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const ul = item.querySelector("ul");
    const lis = ul.querySelectorAll("li");
    console.log(`Elements: ${ lis.length }`);
}
)
