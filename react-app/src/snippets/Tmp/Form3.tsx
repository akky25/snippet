import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema1 = z.object({
  name: z.string(),
});
const schema2 = z.object({
  age: z.number(),
});

type Schema1 = z.infer<typeof schema1>;
type Schema2 = z.infer<typeof schema2>;

// const mode: boolean = true;
const mode: boolean = false;

export default function Form() {
  const { register, handleSubmit } = useForm<Schema1 | Schema2>({
    resolver: zodResolver(mode ? schema1 : schema2),
  });

  const onSubmit = (data: Schema1 | Schema2) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mode ? (
        <input {...register("name")} />
      ) : (
        <input {...register("age", { valueAsNumber: true })} type="number" />
      )}
      <input type="submit" />
    </form>
  );
}
