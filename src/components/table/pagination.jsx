import "./table.scss";

export default function Pagination({
  page = 1,
  totalPages = 1,
  onChange = () => {},
}) {
  const goto = (page) => {
    const actualPage = Math.max(1, Math.min(totalPages, page));
    if (actualPage !== page) onChange(actualPage);
  };

  const pagesToShow = () => {
    const arr = [];
    for (let i = 1; i <= totalPages; i++) arr.push(i);
    return arr;
  };

  return (
    <div className="pagination" role="navigation" aria-label="Paginación">
      <button
        className="paginator_button"
        onClick={() => goto(1)}
        disabled={page === 1}
        aria-label="Primera página"
      >
        «
      </button>
      <button
        className="paginator_button"
        onClick={() => goto(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
      >
        ‹
      </button>

      {pagesToShow().map((page) => (
        <button
          key={page}
          className={`pg_page ${page === page ? "active" : ""}`}
          onClick={() => goto(page)}
          aria-current={page === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        className="paginator_button"
        onClick={() => goto(page + 1)}
        disabled={page === totalPages}
        aria-label="Página siguiente"
      >
        ›
      </button>
      <button
        className="paginator_button"
        onClick={() => goto(totalPages)}
        disabled={page === totalPages}
        aria-label="Última página"
      >
        »
      </button>
    </div>
  );
}
