import Section from "../section/section";

const AboutSection = ({}: {}) => {
  return (
    <Section title="about">
      <div className="py-4 text-sm md:text-base">
        When I was in grade 10 I took a stab at my high school's Intro to
        Computer Science course and now flash forward a{" "}
        <i className="text-green-400 font-semibold">(bit more than a couple)</i>{" "}
        years, I have had the amazing opportunity to build software for a vast
        amount of clients spanning many different industries.
        <br />
        <br />I am a dynamic and innovative front-end developer with{" "}
        <span className="text-green-400 font-semibold">4+ years</span> of
        experience crafting{" "}
        <span className="text-green-400 font-semibold">responsive</span>,{" "}
        <span className="text-green-400 font-semibold">accessible</span>, and{" "}
        <span className="text-green-400 font-semibold">pixel-perfect</span>{" "}
        user-centric web applications that have been used by millions of people
        worldwide. In working and contributing to all aspects of the software
        development cycle in my day-to-day, I take pride in the top-notch
        quality work I deliver for my clients, and the environment I help to
        foster for my colleagues.
        <br />
        <br />
        <span className="block h-[1px] bg-green-400 w-full"></span>
        <br />I work primarily as a{" "}
        <span className="text-green-400 font-semibold">React developer</span>,
        and am adept in a variety of modern{" "}
        <span className="text-green-400 font-semibold">tech stacks</span> and{" "}
        <span className="text-green-400 font-semibold">frameworks</span>. I am
        eager to push the boundaries of my own personal growth and expand my
        skill set to adapt to the ever-changing landscape that is web
        development.
        <br />
        <br />
        <span className="block h-[1px] bg-green-400 w-full"></span>
        <br />
        Outside of work, I love to explore creative outlets such as knitting,
        sewing, playing around with my DJ decks, and curating{" "}
        <i className="text-green-400 font-semibold">almost-too-niche</i>{" "}
        playlists for any and every type of occasion. I also love to spend time
        outdoors - running, biking, and playing ultimate frisbee are my current
        heavy rotation.
        <br />
        <br />
        And a couple more fun facts for the road - I speak French, I was a
        competivie gymnast for 10+ years, and I've planted over 150,000 trees
        throughout Canada (you'll have to ask me more about this, it's a bit of
        a long story!)
      </div>
    </Section>
  );
};

export default AboutSection;
