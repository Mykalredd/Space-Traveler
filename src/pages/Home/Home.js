import React from "react";
import styles from "./Home.module.css";

function Home() {
  
  const scriptText = [
    "🌌 Journey into the Future: In a world where the impossible has become reality, where the stars are no longer out of reach, welcome to the future of humanity's survival and exploration. Witness the evolution of technology as it transforms barren planets into thriving havens, all made possible by the wonders of innovation and human determination.",
    "🌍 From Neglect to Innovation: Once the cradle of civilization, Earth now stands as a solemn reminder of the consequences of neglect and environmental decline. But fear not, for the ingenuity of mankind has soared to new heights. With our relentless pursuit of advancement, we have not only healed our scars but extended our reach across the cosmos.",
    "🚀 Enter Space Travel: Where Dreams Take Flight. Embark on an extraordinary journey with our groundbreaking web application, aptly named Space Travel. As a commander engineer, the fate of humanity's exodus rests in your capable hands. Prepare to face the ultimate challenge... evacuating humankind from their birthplace and guiding them towards a future among the stars.",
    "🔧 Engineer, Explorer, Leader: Space Travel empowers you to engineer, design, and even dismantle spacecraft. Craft vessels that defy the boundaries of imagination, envisioning a future where life flourishes beyond the stars. But remember, your role extends beyond construction – you are a leader, an explorer, a commander steering humanity's destiny.",
    "🌠 A Universe of Possibilities Awaits: Immerse yourself in the thrill of exploration as you chart interplanetary courses within our solar system. Seamlessly navigate your fleet of spacecraft, hurtling through the cosmic void from one celestial body to another. The universe becomes your playground, and every planet a potential new home.",
  ];
  return (
    <div className={styles.pageBackground}>
      <div className={styles.centeredContainer}>
        <h1>MIKE'S SPACE STATION</h1>
        <div className={styles.scriptContainer}>
          {scriptText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;




