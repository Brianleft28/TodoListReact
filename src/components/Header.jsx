const Header = () => {
  return (
    <div className="bg-base-200 bg-opacity-50 backdrop-filter fixed top-0 left-0 min-w-full z-50 backdrop-blur shadow-lg border-primary border-b-2">
      <div className="hover:cursor-pointer selection:bg-none flex p-3 items-center justify-center">
        <h1 className="shadow-sm text-3xl">
          <span className="text-primary">Daily</span>
          <span className="font-bold text-neutral-content text-3xl">
            Tasker
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
