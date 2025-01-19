import aboutHero from "../assets/images/about-hero.jpg";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { SiAsciidoctor } from "react-icons/si";
import { FaWirsindhandwerk } from "react-icons/fa6";

const About = () => {
  return (
    <div className="container mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 z-0 relative md:px-10">
      <section className="py-14 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            style={{ width: "500px", height: "590px", objectFit: "cover" }}
            className="img-box"
          >
            <img
              style={{
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "10px",
              }}
              src={aboutHero}
              alt="About Us tailwind page"
              className="max-lg:mx-auto h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="content-area flex flex-col flex-1 md:w-1/2 mb-8 md:mb-0 md:items-start sm:items-start">
              <p className="font-playfair text-[40px] font-normal mb-0 pb-0">
                The face of beauty
              </p>
              <h2 className="font-playfair text-[64px] font-semibold mt-0">
                Maak kennis met Aphrodite Clinic
              </h2>
              <p className="font-normal text-[18px] mt-8">
                Aphrodite Clinic biedt innovatieve cosmetische en paramedische
                huidzorg op hoog kwaliteitsniveau. Vanuit haar klinieken in
                Nijmegen en Wijchen werken professionele gespecialiseerde
                huidtherapeuten dagelijks met hightech (para)medische
                apparatuur, innovatieve technieken en huidproducten van
                topniveau. Ons ambitieuze en gastvrije team volgt voortdurend
                trainingen om bij te blijven met de nieuwste ontwikkelingen op
                ons vakgebied. Zo bieden wij de beste huidzorg en zien wij
                tevreden gezichten.
              </p>
              <div className="button-area py-8 flex flex-col md:flex-row gap-5 items-center justify-center">
                <a
                  href="#about-section"
                  style={{
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                  }}
                  className="py-4 px-6 bg-[#F0DECA] text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
                >
                  Bekijk onze kliniek in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
      </section>

      <section id="about-section" className="py-16 lg:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="flex items-center col-span-2">
            <div className="content-area flex flex-col flex-1 md:w-1/2 mb-8 md:mb-0 md:items-start sm:items-start">
              <p className="font-playfair text-[32px] font-normal mb-0 pb-0">
                De kracht achter
              </p>
              <h2 className="font-playfair text-[50px] font-semibold mt-0">
                Aphrodite Clinic
              </h2>
              <p className="font-normal text-[16px] mt-8">
                Ze was nog jong, toen Wusala Alibeyli al meewerkte in de
                kapsalon van haar moeder. In die tijd ontstond haar interesse in
                de beautyindustrie. Ook het ondernemen zat er al vroeg in bij de
                bevlogen huidtherapeute en eigenaresse van Aphrodite Clinic. Het
                was herfst 2018 toen Wusala bij de Kamer van Koophandel
                binnenliep om zich met haar cosmetische (para)medische
                huidkliniek Aphrodite Clinic in te schrijven. Ze was toen nog
                bezig met haar HBO-studie Huidtherapie aan De Haagse Hogeschool
                in Den Haag. Dat weerhield de jonge, leergierige en ambitieuze
                Wusala er niet van om alvast voor zichzelf te beginnen. Vanuit
                haar praktijk in Wijchen behandelde ze haar eerste klanten en
                breidde ze haar klantenkring al snel uit. In 2020 studeerde ze
                af en mocht ze zich officieel Huidtherapeut, Bachelor of Science
                noemen.
              </p>
              <p className="font-normal text-[16px] mt-8">
                Wusala’s ondernemersgeest kwam al aan het licht tijdens haar
                stageperiode. Ze liep een grensverleggende stage van 6 maanden
                in Seoul, Zuid-Korea, het paradijs voor huidspecialisten en
                schoonheidsspecialisten. Daar deed ze veel waardevolle ervaring
                op bij Oracle Dermatology & Plastic Surgery, de beste
                kliniekketen op huidgebied. Ze leerde er met een scala aan zeer
                geavanceerde laserapparaten van topkwaliteit werken en zag hoe
                goede apparatuur de kwaliteit van behandelingen positief
                beïnvloedt. Dit stimuleerde haar om in haar eigen kliniek
                uitsluitend te werken met professionele, kwalitatief
                hoogwaardige apparatuur, de nieuwste technieken en de beste
                huidproducten. Sinds die tijd volgt Wusala voortdurend
                trainingen in binnen- en buitenland om bij te blijven met de
                nieuwste ontwikkelingen en haar cliënten uitstekende huidzorg te
                bieden.
              </p>
            </div>
          </div>

          <div
            style={{ width: "500px", height: "590px", objectFit: "cover" }}
            className="img-box"
          >
            <img
              style={{
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "10px",
              }}
              src={aboutHero}
              alt="About Us tailwind page"
              className="max-lg:mx-auto h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="sm:pb-10 lg:pb-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="title flex flex-col gap-5 items-center">
                <h2 className="text-[50px] font-medium font-playfair">
                  <span className="font-playfair text-[32px] font-medium">
                    Ons
                  </span>{" "}
                  Team
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-10">
            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
            />
            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
            />
            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
            />

            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
            />
            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
            />
            <TeamCard
              name="Coriss Ambady"
              profession="Web Developer"
              imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mx-auto mb-10 w-full max-w-1/3">
          <div className="relative overflow-hidden rounded-lg">
            <div
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
              className="image-area"
            >
              <img
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-5 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-[#FAF5EF] px-3 py-5 dark:bg-dark-2">
                <h3 className="font-bold text-[16px]">{name}</h3>
                <p className="text-[16px] font-normal">{profession}</p>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="#8D7B67"
                        fillOpacity="0.21"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
