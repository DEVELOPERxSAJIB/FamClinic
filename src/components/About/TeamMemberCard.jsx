// eslint-disable-next-line react/prop-types
const TeamMemberCard = ({ imageSrc, name, profession, description }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mx-auto mb-10 w-full max-w-1/3">
          <div className="relative overflow-hidden rounded-lg group ease-in transition-all duration-300">
            <div
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
              className="image-area"
            >
              <img
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>

            <div className="absolute bottom-5 w-full text-center ease-in transition-all duration-300">
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

                {/* Updated description section */}
                <div className="description px-6 text-start ease-in-out transition-all duration-300 max-h-0 opacity-0 hover:mt-8 group-hover:max-h-48 group-hover:opacity-100  overflow-hidden">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
