import { useTranslation } from "react-i18next";

const Topbar = () => {

  const [t] = useTranslation("global")

  return (
    <div className="bg-[#F0DECA] text-center py-3">
      <a href="#" className="text-[14px] font-semibold">
        {t(`topbar.title`)}
      </a>
    </div>
  );
};

export default Topbar;
