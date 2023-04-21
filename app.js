const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// GET /users
// Returns a list of all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id
// Returns a specific user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});

// POST /users
// Creates a new user
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
