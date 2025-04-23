
# Premier League Data Visualization (2012–2022)

This repository contains the interactive visualization and source code for **Part 3: Implementation** of the 7CCSMSDV – Simulation and Data Visualization coursework at King’s College London.

## 📊 Project Overview

This D3.js-based visualization explores the relationship between **transfer spending** and **team success** in the Premier League from 2012 to 2022. The visualization highlights:

- Premier League, FA Cup, and EFL Cup wins
- European competition qualifications (UCL, UEL, UECL)
- Relegation outcomes

## 🛠 Features

- Interactive **season slider**
- **Dropdown menu** to highlight team achievements
- **Tooltips** with club name and spending details
- Force-directed **bubble layout**
- Responsive design for different screen sizes

## 📁 Files

| File          | Description                                 |
|---------------|---------------------------------------------|
| `index.html`  | Main HTML container for the visualization   |
| `script.js`   | D3.js code implementing the interactive chart|
| `style.css`   | Styles for layout and tooltips              |
| `data.csv`    | Dataset containing season, spend, and outcomes |
| `demo.mp4`    | 2-minute demo video of the visualization |


## 🧑‍💻 How to Run the Visualization Locally

> This D3.js-based visualization loads data from a CSV file, which means it must be served via a local web server. Opening `index.html` directly will not work due to browser security restrictions.

### 🔧 What I Used
For development, I hosted the visualization using a local server at:

```
http://localhost:8000
```

### ▶️ To Run It Yourself

You can use either a simple Python server or VS Code's Live Server extension.

#### ✅ Option A: Python HTTP Server (no installation needed if Python 3 is installed)
```bash
cd path/to/project-folder
python -m http.server 8000
```
Then open your browser and navigate to:  
**http://localhost:8000**

#### ✅ Option B: VS Code with Live Server Extension
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (from the Extensions panel).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The chart will open in your browser at a local address like `http://127.0.0.1:5500`.

> ⚠️ Opening the file directly (e.g., double-clicking `index.html`) will not load the chart because of blocked file access.

## 🎥 Demo Video

Included in the Repo

## 📚 Acknowledgements

- Data from [Premier League](https://www.premierleague.com) and [Transfermarkt](https://www.transfermarkt.com)
- Built using [D3.js](https://d3js.org)
