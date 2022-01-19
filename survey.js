const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  const name = answer
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    const activity = answer
    rl.question('What do you listen to while doing that?', (answer) => {
      const music = answer
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        const mealType = answer
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          const food = answer
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            const sport = answer
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
            const superPower = answer
              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(`${name} listening to ${music} while ${activity}, devouring ${food} for ${mealType}, prefers ${sport} over any other sport, and is amazing at ${superPower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});