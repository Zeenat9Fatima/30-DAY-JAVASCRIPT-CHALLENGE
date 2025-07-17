const waterInput = document.getElementById('water');
    const exerciseInput = document.getElementById('exercise');
    const moodInput = document.getElementById('mood');
    const tableBody = document.getElementById('entryTable');
    const submitBtn = document.getElementById('submit');
    const updateBtn = document.getElementById('updateEntry');
    const cancelBtn = document.getElementById('cancelEdit');

    let entries = [];
    let editingIndex = null;

    function calculateMood() {
      const water = parseInt(waterInput.value);
      const exercise = parseInt(exerciseInput.value);

      // Only update mood if both fields have valid values
      if (!isNaN(water) && !isNaN(exercise)) {
        let moodCode;

        if (water >= 8 && exercise >= 30) {
          moodCode = 1;
        } else if (water >= 5 && exercise >= 15) {
          moodCode = 2;
        } else {
          moodCode = 3;
        }

        let mood = '';
        switch (moodCode) {
          case 1:
            mood = '😊 Happy';
            break;
          case 2:
            mood = '😐 Neutral';
            break;
          case 3:
          default:
            mood = '😢 Sad';
            break;
        }

        moodInput.value = mood;
      } else {
        moodInput.value = '';
      }
    }

    waterInput.addEventListener('input', calculateMood);
    exerciseInput.addEventListener('input', calculateMood);

    submitBtn.addEventListener('click', () => {
      const date = new Date().toLocaleDateString();
      const water = waterInput.value;
      const exercise = exerciseInput.value;
      const mood = moodInput.value;

      if (!water || !exercise) {
        alert('Please enter both water and exercise values.');
        return;
      }

      const entry = { date, water, exercise, mood };
      entries.push(entry);
      renderEntries();
      resetForm();
    });

    function renderEntries() {
      tableBody.innerHTML = '';

      entries.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.date}</td>
          <td>${entry.water}</td>
          <td>${entry.exercise}</td>
          <td>${entry.mood}</td>
          <td>
            <button onclick="editEntry(${index})">Edit</button>
            <button onclick="deleteEntry(${index})">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    window.editEntry = function(index) {
      const entry = entries[index];
      waterInput.value = entry.water;
      exerciseInput.value = entry.exercise;
      moodInput.value = entry.mood;
      editingIndex = index;
      submitBtn.style.display = 'none';
      updateBtn.style.display = 'inline-block';
      cancelBtn.style.display = 'inline-block';
    };

    updateBtn.addEventListener('click', () => {
      if (editingIndex !== null) {
        entries[editingIndex] = {
          date: new Date().toLocaleDateString(),
          water: waterInput.value,
          exercise: exerciseInput.value,
          mood: moodInput.value
        };
        renderEntries();
        resetForm();
      }
    });

    cancelBtn.addEventListener('click', resetForm);

    window.deleteEntry = function(index) {
      entries.splice(index, 1);
      renderEntries();
    };

    function resetForm() {
      waterInput.value = '';
      exerciseInput.value = '';
      moodInput.value = '';
      editingIndex = null;
      submitBtn.style.display = 'inline-block';
      updateBtn.style.display = 'none';
      cancelBtn.style.display = 'none';
    } 