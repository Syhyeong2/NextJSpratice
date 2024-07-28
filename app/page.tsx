import Books from "./components/books";

async function getBooks() {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/lists`
  );
  return response.json();
}

interface IBook {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default async function Home() {
  const results = await getBooks();
  const books = results.results;

  return (
    <div className="flex justify-center items-center w-screen gap-3 flex-wrap p-24">
      {books.map((book: IBook, index: string) => (
        <Books
          key={index}
          list_name={book.list_name}
          list_name_encoded={book.list_name_encoded}
        />
      ))}
    </div>
  );
}
