import Image from "next/image";

const getSingleMovie = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return response.json();
};

const Single = async ({params}) => {
  const data = await getSingleMovie(params?.id);
  return (
    <main className="container mx-auto">
      <section className="rounded-lg bg-zinc-100 p-8 flex justify-between items-center">
        <div>
          <h1>{data.title}</h1>
          <div>سال ساخت: {data.year}</div>
          <div>زمان: {data.runtime}</div>
          <div>کارگردان : {data.director}</div>
          <div>امتیاز : {data.imdb_rating}</div>
        </div>
        <div>
          <Image
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
            priority={true}
            className='rounded-3xl'
          />
        </div>
      </section>
    </main>
  );
};

export default Single;
