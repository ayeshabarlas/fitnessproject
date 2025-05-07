 <script>
   
    document.getElementById('showPromptBtn').addEventListener('click', function() {
      document.getElementById('prompt').classList.remove('hidden');
      document.getElementById('studio').classList.add('hidden');
    });

    document.getElementById('showStudioBtn').addEventListener('click', function() {
      document.getElementById('prompt').classList.add('hidden');
      document.getElementById('studio').classList.remove('hidden');
    });

    document.getElementById('generateBtn').addEventListener('click', function() {
      generatePrompt();
    });

    function generatePrompt() {
      const data = {
        NumberOfWeeks: document.getElementById('numWeeks').value,
        ProgramName: document.getElementById('programName').value,
        TrainingModality: document.getElementById('trainingModality').value,
        DifficultyLevel: document.getElementById('difficultyLevel').value,
        PrimaryFocus: document.getElementById('primaryFocus').value,
        SecondaryFocus: document.getElementById('secondaryFocus').value,
        DaysPerWeek: document.getElementById('daysPerWeek').value,
        SessionDuration: document.getElementById('sessionDuration').value.replace(" min", ""),
        ExercisesPerDay: document.getElementById('exercisesPerDay').value,
        SetsPerDay: document.getElementById('setsPerDay').value,
        Location: document.getElementById('location').value,
        EquipmentList: document.getElementById('equipmentList').value,
        IntensifiersUsed: document.getElementById('intensifiersUsed').value,
        WantProgression: document.getElementById('wantProgression').value,
      };
      
      const promptText = `
Create a ${data.NumberOfWeeks}-week fitness program called "${data.ProgramName}". This program should follow the ${data.TrainingModality} training style and is designed for someone at the ${data.DifficultyLevel} level.
The primary focus of this program is ${data.PrimaryFocus}, with a secondary focus on ${data.SecondaryFocus}. The user will train ${data.DaysPerWeek} days per week, with each session lasting around ${data.SessionDuration} minutes.
Each workout should include exactly ${data.ExercisesPerDay} exercises and a total of ${data.SetsPerDay} sets per day. The workouts will be performed at ${data.Location}, and the available equipment includes: ${data.EquipmentList}.
Use the following training intensifiers where applicable: ${data.IntensifiersUsed}.
Do you want the program to progressively get more challenging each week? ${data.WantProgression}.
      `.trim();

      document.getElementById('promptOutput').value = promptText;
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

    // Initialize the prompt text on page load
    window.onload = function() {
      generatePrompt();
    };
  </script>
</body>
</html>
