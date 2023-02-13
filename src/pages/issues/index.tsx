import { useForm } from "react-hook-form";
import type { Resolver, SubmitHandler } from "react-hook-form";

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
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-700 to-black pt-[10vh]">
      <div className="mx-auto h-[90vh] w-4/5 text-5xl text-white">
        <div>
          <h1>Add new issue</h1>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label>Title</label>
            <input {...register("title")} />
            {errors.title ? <p>{errors.title.message}</p> : <></>}
            <label>Description</label>
            <input {...register("description")} />
            <label>Environment</label>
            <input
              {...register("environment")}
              placeholder="Steps to reproduce the issue"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
