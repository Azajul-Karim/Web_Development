const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <td>event.key</td>
          <td>${e.key === " " ? "Space" : e.key}</td>
        </tr>
        <tr>

          <td>event.code</td>
          <td>${e.code}</td>
        </tr>
        <tr>
          <td>event.which</td>
          <td>${e.which}</td>
        </tr>
      </table>
    </div>
   `;
});


