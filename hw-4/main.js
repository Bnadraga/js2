btn.addEventListener("click", () => {
  const btn = document.getElementById("btn");
  const input = document.getElementById("input").value;
  const text = document.getElementById("text");

  alert("You send your name!");
  text.textContent = `Hi, ${input}`;
});
