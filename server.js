// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// POST route
app.post('/bfhl', (req, res) => {
  try {
    // Extracting the array from the request body
    const { array } = req.body;

    // Initialize response object
    const response = {
      user_id: generateUserId(), // Generating user_id
      is_success: true, // Assuming success by default
      even_numbers: [],
      odd_numbers: [],
      uppercase_alphabets: []
    };

    // Handling array processing
    if (!Array.isArray(array)) {
      throw new Error('Input is not an array.');
    }

    array.forEach(element => {
      // Check if the element is a number and divisible by 2
      if (typeof element === 'number' && element % 2 === 0) {
        response.even_numbers.push(element);
      } else if (typeof element === 'number' && element % 2 !== 0) {
        response.odd_numbers.push(element);
      } else if (typeof element === 'string') {
        // Convert alphabets to uppercase
        const uppercaseString = element.toUpperCase();
        response.uppercase_alphabets.push(uppercaseString);
      }
    });

    // Sending the response
    res.json(response);
  } catch (error) {
    // Handling errors gracefully
    res.status(400).json({ is_success: false, error: error.message });
  }
});

// Function to generate user_id
function generateUserId() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '');

  return user_id_${formattedDate};
}

// Starting the server
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
