import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Switch,
} from "@headlessui/react";
import { TbInfoTriangle } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RxCross1 } from "react-icons/rx";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Phone is required"),
    subject: yup.string().required("Subject is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().max(500, "Message cannot exceed 500 characters"),
  })
  .required();

export default function GlobalPopup() {
  const [open, setOpen] = useState(true);
  const [agreed, setAgreed] = useState(false);
  console.log(agreed);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contactForm = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [contactLoading, setContactLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-[#F0DECA] pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-[#8d7b67] sm:mx-0 sm:size-10">
                <TbInfoTriangle
                    aria-hidden="true"
                    className="size-6 text-[#F0DECA]"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold"
                  >
                    Tell us what you need! Submit the form, and we’ll assist you right away!
                  </DialogTitle>
                </div>
              </div>
            </div>
              <form onSubmit={handleSubmit(onSubmit)} ref={contactForm}>
                <div className="bg-white rounded-lg p-10 shadow-lg xxs:p-5">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-semibold"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          {...register("firstName")}
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                        />
                        {errors.firstName?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.firstName?.message} *
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-semibold"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          {...register("lastName")}
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                        />
                        {errors.lastName?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.lastName?.message} *
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          {...register("email")}
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                        />
                        {errors.email?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.email?.message} *
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm/6 font-semibold"
                      >
                        Phone
                      </label>
                      <div className="mt-2.5">
                        <input
                          {...register("phone")}
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                        />
                        {errors.phone?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.phone?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm/6 font-semibold"
                      >
                        Subject
                      </label>
                      <div className="mt-2.5">
                        <input
                          {...register("subject")}
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                        />
                        {errors.subject?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.subject?.message} *
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-semibold "
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#8D7B67]"
                          defaultValue={""}
                        />
                        {errors.message?.message && (
                          <p className="text-red-600 text-sm">
                            {errors.message?.message} *
                          </p>
                        )}
                      </div>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-[#8D7B67]"
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                          />
                        </Switch>
                      </div>
                      <Label className="text-sm/6">
                        By selecting this, you agree to our{" "}
                        <a href="#" className="font-semibold">
                          privacy&nbsp;policy
                        </a>
                        .
                      </Label>
                    </Field>
                  </div>
                  <div className="mt-3"></div>
                  <div className="pt-3 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full justify-center rounded-md duration-300 transition-all bg-[#F0DECA] hover:bg-[#F9EEDD] px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      disabled={contactLoading}
                      className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:mt-0 sm:w-auto ${
                        contactLoading
                          ? "bg-[#8D7B67] cursor-not-allowed"
                          : "bg-[#F0DECA] duration-300 ease-in text-[#8D7B67] hover:bg-[#F9EEDD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D7B67]"
                      }`}
                    >
                      {contactLoading
                        ? "Sending your mail . . ."
                        : "Let's talk"}
                    </button>
                  </div>
                </div>
              </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
