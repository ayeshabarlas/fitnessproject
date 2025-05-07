  <script>


function showPage(pageId) {
    document.getElementById('prompt').classList.add('hidden');
    document.getElementById('studio').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
  }

  function generatePrompt() {
    const getValue = (selector) => document.querySelector(selector).value;

    const data = {
      NumberOfWeeks: getValue("input[type='number']"),
      ProgramName: getValue("input[type='text']"),
      TrainingModality: getValue("select:nth-of-type(1)"),
      DifficultyLevel: getValue("select:nth-of-type(2)"),
      PrimaryFocus: getValue("select:nth-of-type(3)"),
      SecondaryFocus: getValue("select:nth-of-type(4)"),
      DaysPerWeek: getValue("select:nth-of-type(5)"),
      SessionDuration: getValue("select:nth-of-type(6)").replace(" min", ""),
      ExercisesPerDay: getValue("select:nth-of-type(7)"),
      SetsPerDay: getValue("select:nth-of-type(8)"),
      Location: getValue("select:nth-of-type(9)"),
      EquipmentList: getValue("input[type='text']"),
      IntensifiersUsed: getValue("select:nth-of-type(10)"),
      WantProgression: getValue("select:nth-of-type(11)"),
    };
    <p id="generateMessage" class="text-green-600 font-semibold mb-2 hidden">Program generated successfully!</p>


    const promptText = `
Create a ${data.NumberOfWeeks}-week fitness program called "${data.ProgramName}". This program should follow the ${data.TrainingModality} training style and is designed for someone at the ${data.DifficultyLevel} level.
The primary focus of this program is ${data.PrimaryFocus}, with a secondary focus on ${data.SecondaryFocus}. The user will train ${data.DaysPerWeek} days per week, with each session lasting around ${data.SessionDuration} minutes.
Each workout should include exactly ${data.ExercisesPerDay} exercises and a total of ${data.SetsPerDay} sets per day. The workouts will be performed at ${data.Location}, and the available equipment includes: ${data.EquipmentList}.
Use the following training intensifiers where applicable: ${data.IntensifiersUsed}.
Do you want the program to progressively get more challenging each week? ${data.WantProgression}.
    `.trim();

    document.querySelector("textarea").value = promptText;
  }

  // Hook up the generate button
  document.querySelector("button.bg-green-600").addEventListener("click", generatePrompt);


  function showPage(page) {
    document.getElementById('prompt').classList.add('hidden');
    document.getElementById('studio').classList.add('hidden');
    document.getElementById(page).classList.remove('hidden');
  }


    function showPage(page) {
      document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
      });
      document.querySelector("textarea").value = promptText;

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
