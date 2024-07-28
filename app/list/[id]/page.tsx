interface IParams {
  params: { id: string };
}

interface IbestBook {
  rank: number;
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

async function getBook(id: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  return response.json();
}

export default async function BookDetails({ params: { id } }: IParams) {
  const result = await getBook(id);
  const bestBooks: IbestBook[] = result.results.books;
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 p-32">
      {bestBooks.map((book: IbestBook, index: number) => (
        <div
          key={index}
          className="w-60 h-96 border-2 flex flex-col justify-center items-center gap-5"
        >
          <img src={`${book.book_image}`} className="w-60 h-60 " />
          <div className="text-gray-50 ">{book.title}</div>
          <div className="text-gray-50 ">{book.author}</div>
        </div>
      ))}
    </div>
  );
}
