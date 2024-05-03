export const DetailsSection = () => {
  const title = [
    { label: "address", value: "809 W. Randolph Chicago, IL" },
    {
      label: "hours",
      value: "Sunday - Thursday 4:30pm - 10pm Friday & Saturday 4:30pm - 11pm",
    },
    { label: "contact", value: "312-492-6262 info@girlandthegoat.com" },
  ];

  return (
    <div className="bg-[#333333] py-20 text-white">
      <div className="flex justify-evenly items-center">
        {title?.map((v, index) => (
          <div key={index}>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-2xl mb-1">{v?.label}</h1>
            </div>
            <div>
              <p>{v?.value}</p>
            </div>
          </div>
        ))}
        <button className='py-3 px-8 bg-[#a76435] my-7 font-medium'>directions</button>
      </div>
    </div>
  );
};
