import styles from "./index.module.css";

export const SearchForm = () => {
  return (
    <>
      <form className={styles.search01}>
        <label htmlFor="search" className="sr-only">
          検索
        </label>
        <input type="search" id="search" placeholder="Search" />
        <button type="submit" aria-label="検索する" className="btn-icon-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      <hr />

      <form className={styles.search02}>
        <label htmlFor="search" className="sr-only">
          検索
        </label>
        <input type="search" id="search" placeholder="Search" />
        <button type="submit" aria-label="検索する">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </>
  );
};
