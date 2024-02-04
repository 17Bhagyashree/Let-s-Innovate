document.getElementById('preferenceForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form values
  const age = parseInt(document.getElementById('age').value);
  const calories = parseInt(document.getElementById('calories').value);
  const protein = parseInt(document.getElementById('protein').value);
  const diseases = document.getElementById('diseases').value;
  const allergies = document.getElementById('allergies').value;

  // Generate food options based on user preferences
  const foodOptions = generateFoodOptions(age, calories, protein, diseases, allergies);

  // Display the generated food options
  displayFoodOptions(foodOptions);
});

function generateFoodOptions(age, calories, protein, diseases, allergies) {
  // Define a sample set of food options (you can replace this with a real data source)
  const foodOptions = {
    breakfast: ["Oatmeal", "Scrambled Eggs", "Whole Wheat Toast", "Greek Yogurt", "Fruit Salad"],
    lunch: ["Grilled Chicken Salad", "Quinoa Bowl", "Vegetable Soup", "Salmon with Steamed Vegetables"],
    dinner: ["Baked Fish", "Brown Rice with Stir-Fried Vegetables", "Turkey Chili", "Vegetable Stir-Fry"]
  };

  // Adjust food options based on user preferences (dummy logic)
  if (diseases.toLowerCase().includes('diabetes')) {
    // Remove high-carb options from breakfast and lunch
    foodOptions.breakfast = foodOptions.breakfast.filter(option => !option.includes("Toast") && !option.includes("Oatmeal"));
    foodOptions.lunch = foodOptions.lunch.filter(option => !option.includes("Quinoa") && !option.includes("Rice"));
  }

  if (allergies.toLowerCase().includes('nuts')) {
    // Remove nut-containing options from all meals
    Object.keys(foodOptions).forEach(meal => {
      foodOptions[meal] = foodOptions[meal].filter(option => !option.toLowerCase().includes("nuts"));
    });
  }

  return foodOptions;
}

function displayFoodOptions(foodOptions) {
  // Display food options suggestions on the webpage
  document.getElementById('breakfast').textContent = "Breakfast Options: " + foodOptions.breakfast.join(", ");
  document.getElementById('lunch').textContent = "Lunch Options: " + foodOptions.lunch.join(", ");
  document.getElementById('dinner').textContent = "Dinner Options: " + foodOptions.dinner.join(", ");
}
