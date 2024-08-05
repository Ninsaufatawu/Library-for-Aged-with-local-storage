

export const Searchbar = () => {
    return (
      <div>
          <div className="flex space-x-5 pt-10 w-full">
             <div className=" border-none bottom-8 relative"> 
                  <input type="text" placeholder="Search for books..." className=" p-2 pr-96 border-none border-white rounded-md "/>
             </div>
             <div className=" relative bottom-8 ">
                  <button className=" relative p-2 border justify-center text-center rounded-md pl-5 pr-5">Search</button>
             </div>
          </div>
      </div>
    )
  }
  