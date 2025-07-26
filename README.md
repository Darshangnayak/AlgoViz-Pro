# 🔍 AlgoViz Pro

An interactive web application built with React and Vite that helps users understand how different sorting algorithms work through step-by-step visualizations.

## 🚀 Features

- 🎨 **Interactive visualization** of popular sorting algorithms:
  - 🔁 Bubble Sort
  - ⚡ Quick Sort
  - 🔀 Merge Sort
  - 🔼 Insertion Sort
  - 📉 Selection Sort
- 📐 Visual learning of **Mathematical Algorithms**:
  - ♾ Factorial Calculation
  - 🌀 Fibonacci Series Generation
- 🕹️ **Step-by-step execution control**
- 🐢⚡ **Adjustable animation speed**
- 📏 **Configurable array size**
- 💡 **Real-time code highlighting**
- 📱 Fully **responsive design** for desktop and mobile devices

## Technologies Used

- React 18
- Vite
- Styled Components
- React Router DOM
- ESLint

  ## 📸 Screenshots

### 🏠 Homepage
![Homepage](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/HomePage.png)
*A clean and interactive landing page of AlgoViz Pro.*

### 🔢 Sorting Algorithms
![Bubble Sort](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/SortingAlgo.png)
 
### 🔢 Bubble Sort Visualization
![Bubble Sort](https://github.com/Darshangnayak/AlgoViz-Pro/blob/8dda6614a57a03c5dd701756a0831348c10482ab/visualization.png)
*Animated sorting of bars using Bubble Sort algorithm.*

### ⏯️ Playback Controls
![Play Pause](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/VisualizationPage.png)  
*Users can pause or reset sorting animations anytime.*

### 🔢 Mathematical Algorithms
![Mathematical Algo](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/Mathametical.png)


### 🔁 Factorial Calculator
![Factorial](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/visualof%20fact.png)  
*Visual trace of factorial computation using recursion.*

### 🔁 Quiz Section
![Quiz](https://github.com/Darshangnayak/AlgoViz-Pro/blob/ba8f4b089641fdcfcc8bc1b89248bc261277715b/quiz.png)  
*To Enhance the Knowledge about the topic.*


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Darshangnayak/AlgoViz-Pro.git
cd algorithm-visualizer
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Previews the production build locally

## 🧠 Features in Detail

### 🔢 Sorting Algorithms

1. **Bubble Sort**
   - 📉 Time Complexity: O(n²)
   - 💾 Space Complexity: O(1)
   - Simple comparison-based sorting algorithm

2. **Quick Sort**
   - 📉 Time Complexity: O(n log n)
   - 💾 Space Complexity: O(log n)
   - Efficient divide-and-conquer algorithm

3. **Merge Sort**
   - 📉 Time Complexity: O(n log n)
   - 💾 Space Complexity: O(n)
   - Stable and efficient sorting algorithm

4. **Insertion Sort**
   - 📉 Time Complexity: O(n²)
   - 💾 Space Complexity: O(1)
   - Builds the final sorted array one element at a time

5. **Selection Sort**
   - 📉 Time Complexity: O(n²)
   - 💾 Space Complexity: O(1)
   - Repeatedly selects the smallest element and moves it to the sorted part

---

### ➗ Mathematical Algorithms

1. **Fibonacci Series**
   - 🔢 Time Complexity:
     - Recursive: O(2ⁿ)
     - Iterative: O(n)
   - 💾 Space Complexity:
     - Recursive: O(n)
     - Iterative: O(1)
   - Generates a sequence where each number is the sum of the two preceding ones

2. **Factorial**
   - 🔢 Time Complexity:
     - Recursive: O(n)
     - Iterative: O(n)
   - 💾 Space Complexity:
     - Recursive: O(n)
     - Iterative: O(1)
   - Calculates the product of all positive integers less than or equal to a given number


### Visualization Controls

- Generate new random arrays
- Control animation speed
- Step forward/backward through the sorting process
- Pause/Resume functionality
- Array size adjustment

## Project Structure

```
algorithm-visualizer/
├── src/
│   ├── algorithms/     # Sorting algorithm components
│   ├── components/     # Reusable UI components
│   ├── utils/         # Utility functions
│   ├── pages/         # Page components
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template

```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by various algorithm visualization tools
- Built with React and modern web technologies
- Uses styled-components for styling
