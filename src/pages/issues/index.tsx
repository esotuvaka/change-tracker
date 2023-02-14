import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
  environment: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return Promise.resolve({
    values: !values.title ? {} : values,
    errors: !values.title
      ? {
          title: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  });
};

export default function Issues() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });
  const onSubmit = handleSubmit(
    (data) => alert(JSON.stringify(data)),
    (e) => {
      console.error(e);
    }
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-700 to-black pt-[10vh]">
      <div className="mx-auto h-[90vh] w-4/5 text-5xl text-white">
        <div className="absolute bottom-0 w-4/5">
          <form
            className="mx-auto my-8 flex w-3/5 flex-col rounded-md bg-gradient-to-b from-neutral-700 to-black p-8 pt-4 text-2xl"
            onSubmit={onSubmit}
          >
            <h1 className="text-3xl">Add New Issue</h1>
            <label>Title</label>
            <input
              {...register("title")}
              className="rounded-md bg-neutral-700 p-1 pl-3 ring-1 ring-white"
            />
            {errors.title ? <p>{errors.title.message}</p> : <></>}
            <label>Description</label>
            <input
              {...register("description")}
              className="rounded-md bg-neutral-700 p-1 pl-3 ring-1 ring-white"
            />
            <label>Environment</label>
            <textarea
              {...register("environment")}
              placeholder="Steps to reproduce the issue"
              className="rounded-md bg-neutral-700 p-1 pl-3 ring-1 ring-white"
            ></textarea>
            <input
              type="submit"
              className="mx-auto mt-4 w-32 rounded-md bg-neutral-700 px-4 py-2 ring-1 ring-white transition-all duration-300 hover:cursor-pointer hover:ring-offset-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
