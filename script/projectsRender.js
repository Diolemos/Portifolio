
//console.log("test")
const projectsRow = document.getElementById("projectsRow");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card shadow-sm h-100">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>

        <div class="mt-auto d-flex justify-content-center gap-2">
          <a href="${project.live}" target="_blank"
             class="btn btn-outline-primary btn-sm">
            Live
          </a>
          <a href="${project.code}" target="_blank"
             class="btn btn-outline-primary btn-sm">
            Code
          </a>
        </div>
      </div>
    </div>
  `;

  projectsRow.appendChild(col);
});
