const SidebarMenu = ({ className }) => {
  return (
    <div className={`border-slate-800 border-t ${className}`}>
      <h2>ADMIN LAYOUT PAGES</h2>
      <ul className="list-none flex-col flex mt-5 gap-3">
        <li>DASHBOARD</li>
        <li>DASHBOARD</li>
        <li>DASHBOARD</li>
        <li>DASHBOARD</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
