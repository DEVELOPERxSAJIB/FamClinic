import aboutHero from "../assets/images/about-hero.jpg";
// import { LiaHandHoldingHeartSolid } from "react-icons/lia";
// import { SiAsciidoctor } from "react-icons/si";
// import { FaWirsindhandwerk } from "react-icons/fa6";
import ScrollToTop from "../components/ScrollToTop";
import teamMembers from "../data/teamMember";
import TeamMemberCard from "../components/About/TeamMemberCard";
import { useTranslation } from "react-i18next";
import Testimonial from "../components/About/Testimonial";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <ScrollToTop />
      <div className="container mx-auto max-w-[1380px] md:px-4 px-8 lg:px-10 z-0 relative">
        <section className="py-14 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              <div
                style={{ maxWidth: "500px", height: "590px" }}
                className="image-area img-box mx-auto lg:mx-0"
              >
                <img
                  src={aboutHero}
                  alt="About Us tailwind page"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "10px",
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center px-4 sm:px-8 lg:px-0">
              <div className="content-area flex flex-col flex-1 md:w-full mb-8 md:mb-0 items-start md:items-start">
                <p className="font-playfair text-[32px] sm:text-[40px] font-normal mb-0 pb-0">
                  {t("aboutHero.sub_title")}
                </p>
                <h2 className="font-playfair text-[40px] sm:text-[50px] md:text-[64px] font-semibold mt-0">
                  {t("aboutHero.title")}
                </h2>
                <p className="font-normal text-[16px] sm:text-[18px] mt-8 max-w-lg">
                  {t("aboutHero.description")}
                </p>
                <div className="button-area py-8 flex flex-col sm:flex-row gap-5 items-center justify-center">
                  <a
                    href="#about-section"
                    style={{
                      borderTopRightRadius: "25px",
                      borderBottomLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                    className="py-4 px-6 bg-[#F0DECA] text-[16px] sm:text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
                  >
                    {t("aboutHero.btnText")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white rounded-2xl shadow-md shadow-gray-100 p-6 flex justify-between items-center">
                <div className="font-manrope block">
                  <LiaHandHoldingHeartSolid size={75} color="#8D7B67" />
                </div>
                <div className="text-end flex-1">
                  <p className="text-[16px] font-semibold leading-5">
                    Geholpen klanten
                  </p>
                  <h4 className="text-[32px] font-semibold mb-2">+3500</h4>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white rounded-2xl shadow-md shadow-gray-100 p-6 flex justify-between items-center">
                <div className="font-manrope block">
                  <SiAsciidoctor size={75} color="#8D7B67" />
                </div>
                <div className="text-end flex-1">
                  <p className="text-[16px] font-semibold leading-5">
                    Verrichtte behandelingen
                  </p>
                  <h4 className="text-[32px] font-semibold mb-2">+20.000</h4>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white rounded-2xl shadow-md shadow-gray-100 p-6 flex justify-between items-center">
                <div className="font-manrope block">
                  <FaWirsindhandwerk size={75} color="#8D7B67" />
                </div>
                <div className="text-end flex-1">
                  <p className="text-[16px] font-semibold leading-5">Sinds</p>
                  <h4 className="text-[32px] font-semibold mb-2">2018</h4>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pt-14 lg:pt-24 relative">
          <Testimonial />
        </section>

        <section id="about-section" className="py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Content Area */}
            <div className="flex items-center md:col-span-2">
              <div className="content-area flex flex-col flex-1 items-start md:items-start">
                <p className="font-playfair text-[24px] sm:text-[32px] font-normal mb-2">
                  De kracht achter
                </p>
                <h2 className="font-playfair text-[36px] sm:text-[40px] md:text-[50px] font-semibold">
                  Aphrodite Clinic
                </h2>
                <p className="font-normal text-[16px] sm:text-[16px] mt-6 max-w-prose">
                  Ze was nog jong, toen Wusala Alibeyli al meewerkte in de
                  kapsalon van haar moeder. In die tijd ontstond haar interesse
                  in de beautyindustrie. Ook het ondernemen zat er al vroeg in
                  bij de bevlogen huidtherapeute en eigenaresse van Aphrodite
                  Clinic. Het was herfst 2018 toen Wusala bij de Kamer van
                  Koophandel binnenliep om zich met haar cosmetische
                  (para)medische huidkliniek Aphrodite Clinic in te schrijven.
                  Ze was toen nog bezig met haar HBO-studie Huidtherapie aan De
                  Haagse Hogeschool in Den Haag. Dat weerhield de jonge,
                  leergierige en ambitieuze Wusala er niet van om alvast voor
                  zichzelf te beginnen. Vanuit haar praktijk in Wijchen
                  behandelde ze haar eerste klanten en breidde ze haar
                  klantenkring al snel uit. In 2020 studeerde ze af en mocht ze
                  zich officieel Huidtherapeut, Bachelor of Science noemen.
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] mt-6 max-w-prose">
                  Wusala’s ondernemersgeest kwam al aan het licht tijdens haar
                  stageperiode. Ze liep een grensverleggende stage van 6 maanden
                  in Seoul, Zuid-Korea, het paradijs voor huidspecialisten en
                  schoonheidsspecialisten. Daar deed ze veel waardevolle
                  ervaring op bij Oracle Dermatology & Plastic Surgery, de beste
                  kliniekketen op huidgebied. Ze leerde er met een scala aan
                  zeer geavanceerde laserapparaten van topkwaliteit werken en
                  zag hoe goede apparatuur de kwaliteit van behandelingen
                  positief beïnvloedt. Dit stimuleerde haar om in haar eigen
                  kliniek uitsluitend te werken met professionele, kwalitatief
                  hoogwaardige apparatuur, de nieuwste technieken en de beste
                  huidproducten. Sinds die tijd volgt Wusala voortdurend
                  trainingen in binnen- en buitenland om bij te blijven met de
                  nieuwste ontwikkelingen en haar cliënten uitstekende huidzorg
                  te bieden.
                </p>
              </div>
            </div>

            {/* Image Area */}
            <div
              style={{ maxHeight: "590px", maxWidth: "500px" }}
              className="img-box mx-auto md:mx-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              <img
                src={aboutHero}
                alt="About Us tailwind page"
                style={{
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "10px",
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="sm:pb-10 lg:pb-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="title flex flex-col gap-3 sm:gap-5 items-center">
                  <h2 className="text-[28px] sm:text-[40px] md:text-[50px] font-medium font-playfair text-center">
                    <span className="font-playfair text-[20px] sm:text-[28px] md:text-[32px] font-medium">
                      Ons
                    </span>{" "}
                    Team
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10">
              {teamMembers?.map((item) => (
                <TeamMemberCard
                  key={item.name}
                  name={item?.name}
                  profession={item.profession}
                  imageSrc={item?.image}
                  description={item?.description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
