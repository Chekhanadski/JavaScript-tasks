function totalLicks(env) {
  const normallyLikes = 252;
  let result = normallyLikes;
  
  for (let item in env) {
    if (!isNaN(env[item])) {
      result += env[item];
    }
  }

  const arrayEnv = Object.entries(env);

  const sortArrayEnv = arrayEnv.sort((a, b) => b[1] - a[1]);

  return sortArrayEnv[0] && sortArrayEnv[0][1] > 0
    ? `It took ${result} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${sortArrayEnv[0][0]}.`
    : `It took ${result} licks to get to the tootsie roll center of a tootsie pop.`;
}

console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 }));
