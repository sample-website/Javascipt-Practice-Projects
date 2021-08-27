
class Book {
  constructor(id, title, imagePath, price, category) {
    this.id = id;
    this.title = title;
    this.imagePath = imagePath;
    this.price = price;
    this.category = category;
  }
}

const databaseBooks = [new Book(1,'C and C++','https://lh3.googleusercontent.com/proxy/SizNoKNv7ysirHXyangwjUbrK9dE_CwzO6l11A-5CqxLuYd_RDkeVz0z9Ok4A_Y8tBSfcBoubnfLmwgZr_cw1E75PV8xg-Q',800,"programming"),
new Book(2,'Java Book','https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80',350,"programming"),
new Book(3,'Python Master','https://cdn.britannica.com/q:60/55/142355-131-EFF621AF/books-Stack-literature-pile-reading-entertainment-society-2010.jpg',2330,"Life"),
new Book(4,'Love Life','https://cdn.lifehack.org/wp-content/uploads/2014/05/large_775089650.jpg',200,"programming"),
new Book(5,'Swag Life','https://static.theprint.in/wp-content/uploads/2021/02/book-1177574_1280-e1612536059648.jpg',2800,"Life"),
];



class BookItem {
  constructor(book) {
    this.book = book;
  }

  render() {
    const li = document.createElement("li");
    li.innerHTML = `<div class="book card">
    <img
      src="${this.book.imagePath}"
      alt=""
      class="card-img-top img-fluid"
      style="width: 130px"
    />
    <div class="card-body">
      <p class="card-title">${this.book.title}</p>
      <p class="font-weight-bold card-text">TK.${this.book.price}</p>
    </div>
  </div>
  <input type="number" style="display:none;" name="bookId" value="${this.book.id}"/>`;
  return li;
  }
}

class BookList {
  books = [];

  constructor(databaseBooks) {
    this.databaseBooks = databaseBooks;
  }

  render() {
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";

    ul.className = 'd-flex books book-wrapper-column full-book-wrapper';

    databaseBooks.forEach((book) => {
      const tempBook = new Book(
        book.id,
        book.title,
        book.imagePath,
        book.price,
        book.category
      );
      const tempBookItem = new BookItem(tempBook);
      this.books.push(tempBook);
      const bookEl = tempBookItem.render();
      ul.append(bookEl);
    });

    ul.addEventListener('click',(event)=>{
      const li = event.target.closest('li');
      const bookId = li.children[1].value;

      let clickedBook;
      this.books.find((bookObj , index , allBooks)=>{
        if(bookObj.id == bookId){
          clickedBook = bookObj;
        }
      });
      
      const bookDetail = document.querySelector('.book-detail');
      bookDetail.classList.toggle('invisible');

      document.querySelector('.book-detail img').src = clickedBook.imagePath;
      document.querySelector('.book-detail h4').textContent = clickedBook.title;
      document.querySelector('.book-detail p').textContent = "Hard Coded Rohid Hasan";
      document.querySelector('.price-box h3').textContent = clickedBook.price;
      document.querySelectorAll('.book-detail p')[7].textContent='category : '+clickedBook.category;

      ul.classList.toggle('invisible');
      document.getElementById('demo').style.display = "none";

    });

    return ul;
  }
}

class App {
  constructor() {}
  render() {
    document.getElementById('demo').style.display = 'block';
    const bookList = new BookList(databaseBooks);
    const bookListEl = bookList.render();
    document.getElementById('demo').innerHTML = "" ;
    document.getElementById('demo').append(bookListEl);
  }
}

const app = new App();
app.render();


