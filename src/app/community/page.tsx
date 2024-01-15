import Image from "next/image";
import classes from "./page.module.css";

const perks = [
  {
    image: "/assets/icons/meal.png",
    text: "Share & discover recipes",
    alt: "A delicious meal",
  },
  {
    image: "/assets/icons/community.png",
    text: "Find new friends & like-minded people",
    alt: "A crowd of people, cooking",
  },
  {
    image: "/assets/icons/events.png",
    text: "Participate in exclusive events",
    alt: "A crowd of people at a cooking event",
  },
];

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          {perks.map((perk, ind) => {
            return (
              <li key={ind}>
                <Image
                  src={perk.image}
                  alt={perk.alt}
                  width={100}
                  height={100}
                />
                <p>{perk.text}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
