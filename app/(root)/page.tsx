import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
   <>
   <section className="pink_container">
   <h1 className="heading">Pitch Your Startup <br /> Connect with entrepreneurs</h1>
   <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
   </p>
   <SearchForm/>
   </section>

   </>
  );
}
