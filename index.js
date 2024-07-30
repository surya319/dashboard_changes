// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// app.use(cors());

// app.use(express.json());

// app.get('/api/getJson/:partnerId/:name', (req, res) => {
//   const filePath = path.join(__dirname, 'json/' + req.params.partnerId + '/' + req.params.name);
  
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).json({ error: 'Failed to read file' });
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       res.status(200).json(jsonData);
//     } catch (parseErr) {
//       res.status(500).json({ error: 'Failed to parse JSON' });
//     }
//   });
// });

// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 5050;

// app.get('/api/getJson/:name', (req, res) => {
//   const baseDir = '/home/surya/Desktop/dashboard/json';
//   const filePath = path.join(baseDir, req.params.name);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).json({ error: 'Failed to read file' });
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       res.status(200).json(jsonData);
//     } catch (parseErr) {
//       res.status(500).json({ error: 'Failed to parse JSON' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 5050;

// const baseDir = '/home/surya/Desktop/dashboard/json';

// app.get('/api/getJson/:name', (req, res) => {
//   const filePath = path.join(baseDir, req.params.name);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).json({ error: 'Failed to read file' });
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       res.status(200).json(jsonData);
//     } catch (parseErr) {
//       res.status(500).json({ error: 'Failed to parse JSON' });
//     }
//   });
// });

// // Dynamic route to handle subdirectory files
// app.get('/api/getContent/:folder/:fileName', (req, res) => {
//   const filePath = path.join(baseDir, req.params.folder, req.params.fileName);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).json({ error: 'Failed to read file' });
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       res.status(200).json(jsonData);
//     } catch (parseErr) {
//       res.status(500).json({ error: 'Failed to parse JSON' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5050;

const baseDir = '/home/surya/Desktop/dashboard/json';

// Enable CORS for all routes
app.use(cors());

app.get('/api/getJson/:name', (req, res) => {
  const filePath = path.join(baseDir, req.params.name);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse JSON' });
    }
  });
});

// Dynamic route to handle subdirectory files
app.get('/api/getContent/:folder/:fileName', (req, res) => {
  const filePath = path.join(baseDir, req.params.folder, req.params.fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse JSON' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

