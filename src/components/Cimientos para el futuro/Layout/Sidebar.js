function Sidebar() {
  const menuItems = [
    { name: "Home", icon: "fas fa-home" },
    { name: "Messages", icon: "fas fa-envelope" },
    { name: "Profile", icon: "fas fa-user" },
  ];

  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.name}>
          <a href="#">
            <i className={item.icon}></i>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;