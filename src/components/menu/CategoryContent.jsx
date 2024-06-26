export function CategoryContent({ title, content }) {
  return (
    <div>
      <h1 className="flex justify-center font-semibold text-xl py-5">
        {title}
      </h1>
      <div className="p-[30px] flex flex-wrap">
        {content?.map((c, index) => (
          <div key={index} className="w-full md:w-1/2 sm:3/4 pr-7 mb-[30px]">
            <div className="border-b pb-5">
              <div className="flex justify-between font-semibold text-sm">
                <label>{c?.name}</label>
                <label>{`$ ${c?.page}`}</label>
              </div>
              <p className="mt-10 text-xs">{c?.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
