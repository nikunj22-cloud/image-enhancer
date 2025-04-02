# Image Enhancer

## Description
Image Enhancer is a web application built using React that allows users to enhance and edit images with various filters and effects. The application provides real-time preview and customization options for better image enhancement.

## Features
- Upload and display images
- Apply filters like brightness, contrast, saturation, grayscale, and blur
- Adjust image properties dynamically
- Download enhanced images
- Responsive UI for a seamless user experience

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Image Processing**: CSS filters, Canvas API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-enhancer.git
   cd image-enhancer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Usage
1. Upload an image using the file input.
2. Adjust filters using the available sliders.
3. Preview the enhanced image in real time.
4. Download the modified image.

## Folder Structure
```
image-enhancer/
│-- src/
│   │-- components/
│   │   │-- ImageUploader.js
│   │   │-- ImageEditor.js
│   │   │-- Controls.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Deployment
To deploy the app on Vercel:
```bash
npm run build
vercel deploy
```

## License
This project is open-source and available under the MIT License.

## Contributing
Feel free to submit issues and pull requests. Contributions are welcome!

