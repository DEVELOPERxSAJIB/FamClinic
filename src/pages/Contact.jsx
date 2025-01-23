import { Field, Label, Switch } from "@headlessui/react";
import { useRef, useState } from "react";
import { LiaWhatsapp } from "react-icons/lia";
import { MdCall } from "react-icons/md";
import contactus from "../assets/images/contact-us.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RxCross1 } from "react-icons/rx";
import ScrollToTop from "../components/ScrollToTop";

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

const Contact = () => {
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
  const [successMessageContact, setSucessMessageContact] = useState(true);

  // const sendContactEmail = () => {
  //   setContactLoading(true);
  //   emailjs
  //     .sendForm("service_jmbaz6f", "template_cx2se4d", contactForm.current, {
  //       publicKey: "XjCo6NzTjIPpv5zQw",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         setSucessMessageContact(true);
  //         reset();
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     )
  //     .finally(() => {
  //       setContactLoading(false);
  //     });
  // };

  return (
    <>
      <ScrollToTop />
      <div className="contact-top mx-auto">
        <div className="image max-w-full h-56 relative">
          <img
            className="h-full w-full object-cover"
            src={contactus}
            alt="hero-image"
          />
          <h2 className="absolute inset-0 flex gap-3 items-center justify-center text-white text-xl font-bold">
            <Link
              to={"/"}
              className="translate-all ease-in duration-300 hover:text-[#8D7B67] hover:duration-300 hover:ease-out"
            >
              Home{" "}
            </Link>{" "}
            {">"} Contact Page
          </h2>
        </div>
      </div>
      <section>
        <div className="container max-w-[1380px] px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h2 className="text-[32px] md:text-[48px] lg:text-[64px] max-w-[90%] font-semibold text-start md:text-start">
                Kom in contact met ons
              </h2>
              <div className="desc">
                <p className="text-[16px] font-light py-3">
                  {" "}
                  Voor informatie en advies of het maken van een afspraak, kunt
                  u Aphrodite Clinic telefonisch bereiken tijdens
                  openingstijden. U kunt daarvoor ook het contactformulier
                  gebruiken. Wij streven ernaar om binnen 24 uur te reageren.
                </p>
                <p className="text-[16px] font-light py-3">
                  {" "}
                  Aphrodite Clinic werkt alleen op afspraak.
                </p>
              </div>
              <div className="mt-6 space-y-8 md:mt-8">
                <a
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  href="https://wa.me/+8801789557538"
                  className="inline-flex bg-white items-center shadow font-semibold py-2 px-4"
                >
                  WhatsApp ons
                  <div className="ml-12 p-3 translate-all duration-300 shadow-md bg-[#F0DECA] rounded-full hover:bg-[#F9EEDD] hover:translate-all hover:duration-300">
                    <LiaWhatsapp className="" size={30} color="#8D7B67" />
                  </div>
                </a>
              </div>

              <div className="mt-6 space-y-8 md:mt-8">
                <a
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  href="tel:+8801789557538"
                  className="inline-flex bg-white items-center shadow font-semibold py-2 px-4"
                >
                  Bel ons (024) 207 02 06
                  <div className="ml-12 p-3 shadow-md bg-[#F0DECA] rounded-full translate-all duration-300 hover:bg-[#F9EEDD] hover:translate-all hover:duration-300">
                    <MdCall className="" size={30} color="#8D7B67" />
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="xxs:mt-48">
                <form onSubmit={handleSubmit(onSubmit)} ref={contactForm}>
                  {successMessageContact && (
                    <div className="flex bg-[#F9EEDD] w-full p-3 rounded-md justify-between items-center my-3 shadow">
                      <span
                        className="text-success text-[14px]"
                        style={{ fontWeight: "700px" }}
                      >
                        Thanks for contacting. You will get an Email from us
                        soon.
                      </span>

                      <span
                        style={{ cursor: "pointer", paddingLeft: "3px" }}
                        onClick={() => setSucessMessageContact(false)}
                      >
                        <RxCross1 className="text-[#8D7B67]" />
                      </span>
                    </div>
                  )}

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
                    <div className="mt-3">
                      <button
                        type="submit"
                        disabled={contactLoading}
                        className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#FAF5EF] shadow rounded-lg overflow-hidden flex items-end justify-center h-96 relative pb-4">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373.177017327033!2d89.54938849436931!3d22.825097845831163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff90084a63a7cf%3A0x7c40a60486a738c9!2sKDA%20New%20Market!5e0!3m2!1sen!2sbd!4v1737198796849!5m2!1sen!2sbd"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white flex flex-wrap py-6 rounded shadow-md absolute">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Photo booth tattooed prism, portland taiyaki Demo Address Norway
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">(024) 207 02 06</p>
          </div>
        </div>
      </div>

      {/* <div className="py-12 relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div> */}
    </>
  );
};

export default Contact;
