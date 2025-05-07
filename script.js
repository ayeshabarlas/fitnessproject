 <script>
    function showPage(page) {
      document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
      });
      document.getElementById(page).classList.remove("hidden");
    }

    function addExercise(exercise) {
      const row = document.createElement("tr");
      row.classList.add("hoverable");
      row.innerHTML = `
        <td class="p-2 text-center">New</td>
        <td class="p-2 text-center">Regular</td>
        <td class="p-2 text-center">New</td>
        <td class="p-2">${exercise}</td>
        <td class="p-2 text-center">3</td>
        <td class="p-2 text-center">12,10,8</td>
        <td class="p-2 text-center">95,115,135</td>
        <td class="p-2 text-center">1-3-1</td>
        <td class="p-2">Notes</td>
      `;
      document.getElementById("day1-table").appendChild(row);
    }

    function combineCircuits() {
      alert("Circuits Combined!");
    }
  </script>
</body>
</html>
