const Sidebar = ({ children }) => {
  return (
    <aside className="md:block hidden overflow-scroll fixed inset-y-0 w-[260px]  px-8 py-6 bg-slate-400">
      {children}
    </aside>
  );
};

export default Sidebar;