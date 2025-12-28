const LittleCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
      <div className="hover-scale hover:bg-neutral-100 w-full md:max-w-73.25 h-42.5 items-center justify-center border border-neutral-200 rounded-md shadow-lg flex flex-col gap-2">
        <h3 className="font-playfair text-[30px] font-semibold">3</h3>
        <p className="font-playfair font-semibold">Locations</p>
      </div>
      <div className=" hover-scale hover:bg-neutral-100 w-full md:max-w-73.25 h-42.5 items-center justify-center border border-neutral-200 rounded-md shadow-lg flex flex-col gap-2">
        <h3 className="font-playfair text-[30px] font-semibold">1995</h3>
        <p className="font-playfair font-semibold">Founded</p>
      </div>
      <div className=" hover-scale hover:bg-neutral-100w-full md:max-w-73.25 h-42.5 items-center justify-center border border-neutral-200 rounded-md shadow-lg flex flex-col gap-2">
        <h3 className="font-playfair text-[30px] font-semibold">65+</h3>
        <p className="font-playfair font-semibold">Staff Members</p>
      </div>
      <div className="hover-scale hover:bg-neutral-100 w-full md:max-w-73.25 h-42.5 items-center justify-center border border-neutral-200 rounded-md shadow-lg flex flex-col gap-2">
        <h3 className="font-playfair text-[30px] font-semibold">100%</h3>
        <p className="font-playfair font-semibold">Satisfied Customers</p>
      </div>
    </div>
  );
};

export default LittleCards;
