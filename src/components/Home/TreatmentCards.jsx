import { MdArrowCircleDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import treatments from "../../data/treatment";
import "../stylesheet.css";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const TreatmentCards = ({ limit }) => {
  const [t] = useTranslation("global");
  const displayedTreatments = limit ? treatments.slice(0, limit) : treatments;

  return (
    <div className="all-treatments pt-12">
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-12 sm:gap-y-6 gap-10">
        {displayedTreatments?.map((item) => (
          <div className="card" key={item?.id}>
            <button className="mail">
              <MdArrowCircleDown size={25} color="#8D7B67" />
            </button>
            <div className="profile-pic">
              <img src={item?.image} alt="" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">
                  {t(`allTreatments.${item.key}.name`)}
                </span>
                <span className="desc line-clamp-3">
                  {t(`allTreatments.${item.key}.description`)}
                </span>
                <div className="mt-4">
                {item?.subcategory && (
                  <ul className="pt-2">
                    {item.subcategory?.slice(0, 4).map((subc) => {
                      return (
                        <li className="list-none" key={subc.name}>
                          <Link to={`/treatment/${item.slug}`} className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>{t(`allTreatments.${item.key}.subcategories.${subc.name}`)}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}

                </div>
              </div>
              <div className="bottom-bottom">
                <div className="social-links-container">{t(`allTreatments.${item.key}.name`)}</div>
                <Link
                  to={`/treatment/${item?.slug}`}
                  className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                >
                  {t("allTreatments.seeDetails")}
                  <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentCards;
