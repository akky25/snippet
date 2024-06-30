/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema1 = z.object({
  name: z.string(),
});
type Schema1 = z.infer<typeof schema1>;

export function Form1() {
  const handleSubmit = (data: Schema1) => {
    console.log(data);
  };

  return (
    <FormWrap schema={schema1} onSubmit={handleSubmit}>
      {({ register }) => (
        <>
          <input {...register("name")} />
        </>
      )}
    </FormWrap>
  );
}

const schema2 = z.object({
  age: z.number(),
});
type Schema2 = z.infer<typeof schema2>;

export function Form2() {
  const handleSubmit = (data: Schema2) => {
    console.log(data);
  };

  return (
    <FormWrap schema={schema2} onSubmit={handleSubmit}>
      {({ register }) => (
        <>
          <input {...register("age", { valueAsNumber: true })} type="number" />
        </>
      )}
    </FormWrap>
  );
}

type FormWrapProps<TFormValues extends FieldValues, Schema> = {
  schema: Schema;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  options?: UseFormProps<TFormValues>;
};

const FormWrap = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Schema extends z.ZodType<any, any, any>,
  TFormValues extends FieldValues = z.infer<Schema>
>({
  onSubmit,
  schema,
  children,
  options,
}: FormWrapProps<TFormValues, Schema>) => {
  const form = useForm({
    ...options,
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {children(form)}
      <input type="submit" />
    </form>
  );
};

// type FormWrapProps<TFormValues extends FieldValues, Schema> = {
//   schema: Schema;
//   children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
//   onSubmit: SubmitHandler<TFormValues>;
//   options?: UseFormProps<TFormValues>;
// };

// const FormWrap = <
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   Schema extends typeof schema1 | typeof schema2,
//   TFormValues extends FieldValues = z.infer<Schema>
// >({
//   onSubmit,
//   schema,
//   children,
//   options,
// }: FormWrapProps<TFormValues, Schema>) => {
//   const form = useForm<TFormValues>({
//     ...options,
//     resolver: zodResolver(schema),
//   });

//   if (isSchema1(schema, true)) {
//     schema;
//     form.register("");
//   }

//   return (
//     <form onSubmit={form.handleSubmit(onSubmit)}>
//       {children(form)}
//       <input type="submit" />
//     </form>
//   );
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const isSchema1 = (data: any, mode: boolean): data is typeof schema1 => {
//   return mode;
// };
