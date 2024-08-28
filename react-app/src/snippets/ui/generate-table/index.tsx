import { useState } from "react";
import styles from "./index.module.css";

export const GenerateTale = () => {
  const [rows, setRows] = useState<null | string>(null);
  const [columns, setColumns] = useState<null | string>(null);
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target as HTMLFormElement);
          setRows(data.get("rows") as string);
          setColumns(data.get("columns") as string);
        }}
      >
        <div>
          <label htmlFor="rows">Rows</label>
          <input type="text" id="rows" name="rows" />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input type="text" id="columns" name="columns" />
        </div>
        <button>Submit</button>
      </form>
      {rows && columns && (
        <Table rows={Number(rows)} columns={Number(columns)} />
      )}
    </>
  );
};

const Table = ({ rows, columns }: { rows: number; columns: number }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {Array<number>(rows)
          .fill(0)
          .map((_, row) => (
            <tr key={row}>
              {Array<number>(columns)
                .fill(0)
                .map(
                  (_, column) =>
                    column % 2 === 0 ? (
                      <td key={column}>{row + 1 + column * rows}</td>
                    ) : (
                      <td key={column}>{rows - row + column * rows}</td>
                    )
                  // }
                )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
