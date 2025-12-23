(async () => {
  const url = "https://api.github.com/repos/baggZ-development-team/soundboard-V2/contents/audio";

  const res = await fetch(url);
  const data = await res.json();

  // Extract all "name" attributes
  const names = data.map(item => item.name);

  // Put into JSON
  const json = {
    files: names
  };

  console.log(json);
})();
