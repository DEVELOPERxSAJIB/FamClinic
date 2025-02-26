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
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { RxCross1 } from "react-icons/rx";

export default function GlobalPopup() {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [t] = useTranslation("global");

  const schema = yup
    .object({
      firstName: yup.string().required(t("contact.form.firstName.validation")),
      lastName: yup.string().required(t("contact.form.lastName.validation")),
      phone: yup.string().required(t("contact.form.phone.validation")),
      subject: yup.string().required(t("contact.form.subject.validation")),
      email: yup.string().email().required(t("contact.form.email.validation")),
      message: yup.string().max(500, t("contact.form.message.validation")),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contactForm = useRef();

  const [contactLoading, setContactLoading] = useState(false);

  const sendContactEmail = () => {
    if (!contactForm.current) {
      console.error("Contact form is not properly referenced.");
      return;
    }

    setContactLoading(true);

    emailjs
      .sendForm(
        "service_11fps2d",
        "template_aqzggyd",
        contactForm.current,
        "EvXDWKD5IdYSwROnn"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(false);
          Swal.fire({
            title: "Thank you",
            text: "We'll be sending you an email shortly!",
            icon: "success",
            showCancelButton: true,
            cancelButtonColor: "#8d7b67",
            cancelButtonText: "Close",
            showConfirmButton: false,

            customClass: {
              popup: "custom-swal-popup",
              title: "custom-swal-title",
              htmlContainer: "custom-swal-text",
            },
          });
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setContactLoading(false);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
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
            <div className="bg-[#F0DECA] pt-3 pb-2 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center">
                <div className="relative flex w-full items-center justify-center">
                  <div className="flex h-12 w-12 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#8d7b67]">
                    <TbInfoTriangle className="h-6 w-6 text-[#F0DECA]" />
                  </div>

                  <div onClick={() => setOpen(false)} className="absolute right-5">
                    <RxCross1 size={22} />
                  </div>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold">
                    {t("contact.form.popupTop")}
                  </DialogTitle>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(sendContactEmail)} ref={contactForm}>
              <div className="bg-white rounded-lg p-10 shadow-lg xxs:p-5">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-semibold"
                    >
                      {t("contact.form.firstName.label")}
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
                      {t("contact.form.lastName.label")}
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
                      {t("contact.form.email.label")}
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
                      {t("contact.form.phone.label")}
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
                      {t("contact.form.subject.label")}
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
                      {t("contact.form.message.label")}
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
                        onChange={(checked) => {
                          setAgreed(checked);
                          const hiddenInput =
                            document.getElementById("agreedHiddenInput");
                          if (hiddenInput) {
                            hiddenInput.value = checked
                              ? "Client agreed to our privacy and policy"
                              : "Client disagreed to our privacy and policy";
                          }
                        }}
                        className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-[#8D7B67]"
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5" />
                      </Switch>
                    </div>
                    <Label className="text-sm/6">
                      {t("contact.form.priveryAndPolicy")}{" "}
                      <a href="#" className="font-semibold">
                        {t("contact.form.priveryAndPolicyLink")}
                      </a>
                    </Label>
                    <input
                      type="hidden"
                      name="privacy"
                      id="agreedHiddenInput"
                      value={
                        agreed
                          ? "Client agreed to our privacy and policy"
                          : "Client disagreed to our privacy and policy"
                      }
                    />
                  </Field>
                </div>
                <div className="mt-3"></div>
                <div className="pt-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md duration-300 transition-all bg-[#F0DECA] hover:bg-[#F9EEDD] px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
                  >
                    {t("contact.form.closeBtn")}
                  </button>
                  <button
                    type="submit"
                    disabled={contactLoading}
                    className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:mt-0 sm:w-auto ${
                      contactLoading
                        ? "bg-[#8D7B67] text-[#fff]"
                        : "bg-[#F0DECA] duration-300 ease-in text-[#8D7B67] hover:bg-[#F9EEDD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D7B67]"
                    }`}
                  >
                    {contactLoading
                      ? t("contact.form.sendingMail")
                      : t("contact.form.submitBtn")}
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
