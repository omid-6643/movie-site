import Image from "next/image";

const getData = async () => {
  const response = await fetch(
    "https://moviesapi.ir/api/v1/movies?page={page}",
    { cache: "no-store" }
  );
  return response.json();
};

const HomePage = async () => {
  const moviesData = await getData();
  return (
    <main className="flex flex-col gap-8 container mx-auto">
      <div className="text-center text-2xl text-blue-900">صفحه اصلی</div>
      <div className="flex justify-between items-center flex-wrap">
        {moviesData?.data?.map((item, index) => (
          <div
            key={index}
            className="h-[30rem] my-4 w-72 border-2 border-zinc-300 rounded-2xl p-4 relative flex flex-col gap-4"
          >
            <div className="flex justify-center items-center">
              <Image
                width={240}
                height={260}
                src={item.poster}
                alt={item.title}
                className="rounded-2xl"
              />
            </div>
            <h3>{item.title}</h3>
            <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center">
              <div className="px-2 py-1 bg-zinc-200 rounded-md">
                {item.year}
              </div>
              <div className="px-2 py-1 bg-zinc-200 rounded-md">
                {item.country}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
