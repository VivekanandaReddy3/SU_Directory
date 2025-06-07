import { client } from "@/sanity/lib/client"
import Ping from "./Ping"
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries"

const View = async ({id}:{id:string}) => {
    const result = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id});
    const totalViews = result?.views || 0;


    //TODO: Update the number of Views
  return <div className="view-container">
    <div className="absolute -top-2 -right-2">
        <Ping/>
    </div>

    <p className="view-text">
        <span className="font-black">
            {totalViews} {totalViews === 1 ? 'View' : 'Views'}
        </span>
    </p>

  </div>
}

export default View