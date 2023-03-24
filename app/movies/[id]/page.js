import Image from "next/image";

const getSingleMovie = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return response.json();
};

const Single = async ({ params }) => {
  const data = await getSingleMovie(params?.id);
  return (
    <main className="container mx-auto flex flex-col gap-12">
      <section className="rounded-lg bg-zinc-100 p-8 flex justify-between items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1>{data.title}</h1>
            <div>سال ساخت: {data.year}</div>
            <div>زمان: {data.runtime}</div>
            <div>کارگردان : {data.director}</div>
            <div>امتیاز : {data.imdb_rating}</div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>خلاصه فیلم</div>
              <div>{data.plot}</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>دسته بندی</div>
              <div className="flex gap-4 justify-start items-center flex-wrap">
                {data.genres.map((item, index) => (
                  <div
                    key={index}
                    className="gap-4 rounded-md px-4 py1 bg-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
            priority={true}
            className="rounded-3xl"
          />
        </div>
      </section>
      <section className="flex justify-between items-center">
        {data.images.map((item, index) => (
          <Image
            width={400}
            height={200}
            key={index}
            alt={item}
            src={item}
            priority={true}
            className="rounded-xl"
          />
        ))}
      </section>
    </main>
  );
};

export default Single;
