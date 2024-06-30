import { UseFormReturn, useForm } from "react-hook-form";
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

export default function Form({
  schema,
}: {
  schema: typeof schema1 | typeof schema2;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  }) as unknown as UseFormReturn<z.infer<typeof schema>>;

  const onSubmit = (data: Schema1 | Schema2) => {
    console.log(data);
  };

  if (isSchema1(schema)) {
    console.log(schema);
    console.log(form.register(""));
  }

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

const isSchema1 = (data: any): data is typeof schema1 => true;
