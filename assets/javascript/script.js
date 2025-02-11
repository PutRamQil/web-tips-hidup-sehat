function toggleContent(contentId, panahId) {
  let content = document.getElementById(contentId);
  let panah = document.getElementById(panahId);

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    panah.classList.add("rotate");
  } else {
    content.style.display = "none";
    panah.classList.remove("rotate");
  }
}
