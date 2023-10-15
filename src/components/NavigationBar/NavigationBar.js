import {NavLink} from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar ()
{
  
    return ( // DONE todo
      <nav className={styles.navbar}>
        <NavLink 
          to="/home"
          className={({isActive}) => isActive ? styles.active : undefined}  
        >
          Home
        </NavLink>
  
        <NavLink
          to="/planets"
          className={({isActive}) => isActive ? styles.active : undefined}
        >
          Planets
        </NavLink>
  
        <NavLink
          to="/spacecrafts" 
          className={({isActive}) => isActive ? styles.active : undefined}
        >
          Spacecrafts
        </NavLink>
      </nav>
    );
  }
  
export default NavigationBar;

// import {NavLink} from "react-router-dom";

// import styles from "./NavigationBar.module.css";

// function NavigationBar ()
// {
//   const routes = [
//     {to: "/", text: "🌎 Home"},
//     {to: "/spacecrafts", text: "🚀 Spacecrafts"},
//     {to: "/planets", text: "🪐 Planets"}
//   ];

//   return (
//     <nav className={styles["navigation"]}>
//       {
//         routes.map((route, index) =>
//                      <NavLink
//                        key={index}
//                        className={({isActive, isPending}) => `${styles["navigation__item"]} ${isActive ? styles["navigation__item--active"] : ""}`}
//                        to={route.to}
//                      >
//                        {route.text}
//                      </NavLink>
//         )
//       }
//     </nav>
//   );
// }

// export default NavigationBar;
