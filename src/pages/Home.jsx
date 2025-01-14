import { FiArrowRight } from "react-icons/fi";
import heroImage from "../assets/images/hero-image-woman.png";

const Home = () => {
  return (
    <div className="hero-main container mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 z-0 relative md:px-10">
      <div className="hero-wrapper py-12">
        <div className="hero-section flex flex-col md:flex-row items-center">
          {/* Content Area */}
          <div className="content-area flex flex-col flex-1 md:w-1/2 mb-8 md:mb-0 md:items-start sm:items-start">
            <p className="font-playfair text-[40px] font-normal mb-0 pb-0">
              Welkom bij
            </p>
            <h2 className="font-playfair text-[64px] font-semibold mt-0">
              Aphrodite Clinic
            </h2>
            <p className="max-w-[550px] font-normal text-[18px] mt-8">
              Aphrodite Clinic verwelkomt u graag voor een breed palet aan
              cosmetische en innovatieve huidverbeterende behandelingen in haar
              paramedische kliniek in Nijmegen. Ons team van gediplomeerde,
              specialistische huidtherapeuten volgt de nieuwste ontwikkelingen
              en wordt getraind om u de best mogelijke behandelingen te kunnen
              geven.
            </p>
            <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center md:items-start sm:items-start">
              <a
                href="#"
                style={{
                  borderTopRightRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
                className="py-4 px-6 bg-[#F0DECA] text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
              >
                Bekijk onze Behandelingen
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[18px] font-normal group"
              >
                Maak kennis met ons
                <div
                  style={{
                    boxShadow:
                      "box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
                  }}
                  className="rounded-full bg-[#F9EEDD] p-3 border border-[#F9EEDD] shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-[#F0DECA] group-hover:text-[#000]"
                >
                  <FiArrowRight />
                </div>
              </a>
            </div>
          </div>

          {/* Image Area */}
          <div
            style={{
              height: "565px",
              width: "662px",
              objectFit: "cover",
            }}
            className="image-area flex-1 flex justify-end md:w-1/2 md:justify-start sm:justify-center"
          >
            <img
              src={heroImage}
              alt="here-woman-image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
