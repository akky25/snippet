export const Component = () => {
  const urlString = "http://localhost:5173/xxx";
  // const urlString = "http://localhost:5173/xxx?name=akita";
  const url = new URL(urlString);
  const searchParams = new URLSearchParams(url.search);

  // クエリパラメーターをオブジェクトに変換
  const queryParams = Object.fromEntries(searchParams.entries());

  console.log(queryParams); // { name: 'akita' }
  console.log(`http://localhost:5173?${searchParams.toString()}`);

  return (
    <div>
      <form action="/xxx" method="get">
        <input type="hidden" value="akita" name="name" />
        <button>submit</button>
      </form>
      <a href="/xxx?name=akita">link</a>

      {/* <form action="/submit-form" method="get">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" />
        <button type="submit">Submit</button>
      </form> */}
      <button
        onClick={() =>
          fetch("/submit-form", { method: "post" }).then((v) =>
            console.log(v.status)
          )
        }
      >
        tmp
      </button>
    </div>
  );
};
