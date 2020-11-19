import fetch from "node-fetch";

(async () => {
  const res = await fetch("https://espn.fantasy.com/api/getboxscore", {
    method: "PATCH",
  });
  const text = await res.text();
  console.log(text);
})();
