const Body = () => {
  return (
    <div>
      <section className="background-primary">
        <div className="grid ">
          <h2 className="text-accent fs-700 title ff-serif">Spell Forge</h2>
          <p className="text-accent fs-400 description">
            {" "}
            Spell Forge is Discord Bot to help make running Dungeons and Dragons
            combat easier. Using slash commands you can easily search for spells
            and Role Dice directly in Discord
          </p>
        </div>
      </section>

      <section className="background-primary container">
        <h2 className="text-accent fs-600 text-center uppercase">commands</h2>
        <ul className="icon-grid">
          <li className="text-center">
            <i class="fa-solid fa-dice-d20 text-white fa-2xl text-center"></i>
            <h4 className="text-white text-center">/rolld20</h4>
            <p className="text-white text-center">
              Roll a D20 and return the results
            </p>
          </li>
          <li className="text-center">
            <i class="fa-solid  fa-wand-magic-sparkles text-white fa-2xl text-center"></i>
            <h4 className="text-white text-center">/Spell</h4>
            <p className="text-white text-center">
              Search for a spell and get it's entry
            </p>
          </li>
        </ul>
      </section>
      <div className="container">
        <button className="btn">
          <a href="https://discord.com/api/oauth2/authorize?client_id=948326238458642533&permissions=2048&scope=bot">
            {" "}
            <p className="text-center text-accent ff-serif fs-500">
              {" "}
              Invite to your server
            </p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Body;
