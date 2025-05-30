import StartupCard from "../../components/StartupCard";
import SearchForm from "../../components/SearchForm";


export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query

  const posts  = [{
    _createdAt : new Date(),
    views: 55,
    author: {_id:1, name: 'Vivek'},
    _id: 1,
    description: 'This is a Description.',
    image: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Countries",
    title: "Germany",
  }];

  return (
   <>
   <section className="pink_container">
   <h1 className="heading">Pitch Your Startup <br /> Connect with entrepreneurs</h1>
   <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
   </p>
   <SearchForm query={query}/>
   </section>

   <section className="section_container">
      <p className="text-30-semibold">
        {query ?  `Search results for "${query}"` : "All Startups"}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length>0 ? (
          posts.map((post: StartupCardType)=>(
            <StartupCard key={post?._id} post ={post}/>
          ))
        ):(
          <p className="no-results">No Startups Found</p>
        )}
      </ul>

   </section>

   </>
  );
}
