
# Premier League Data Visualization (2012–2022)

This project is part of the 7CCSMSDV – Simulation and Data Visualization module at King’s College London (Summer 2025 session).

## 📊 Project Overview

This interactive visualization explores how **transfer spending** correlates with **team success** in the Premier League between 2012 and 2022. Built using **D3.js**, the chart highlights achievements such as:

- Winning the Premier League, FA Cup, or EFL Cup
- Qualifying for European competitions (UCL, UEL, UECL)
- Relegation status

## 🎥 Demo Video

[![Watch the demo](https://img.shields.io/badge/Watch%20Demo-Click%20Here-blue)](https://your-demo-link.com)

*(Replace the above with the actual YouTube or hosting link to your demo)*

## 🛠 Features

- Interactive **season slider**
- **Highlight dropdown** for team achievements
- Hover **tooltips** with spend values
- Force-directed **bubble layout** with color-coded outcomes
- Responsive and accessible layout

## 📁 Files

| File               | Description                                 |
|--------------------|---------------------------------------------|
| `index.html`       | Main HTML file linking the visualization    |
| `script.js`        | D3.js code for the bubble chart             |
| `style.css`        | Basic styling for layout and tooltip        |
| `data.csv`         | Final dataset (club, season, spend, outcomes) |
| `cleaned_references.bib` | BibTeX reference file used in report    |
| `report.pdf`       | Final submission report                     |
| `demo.mp4` *(optional)* | 2-minute demo of the visualization      |

## 🧑‍💻 Local Setup Instructions (Using VS Code Live Server)

> This project uses D3.js and must be run via a local server, such as **VS Code Live Server**, due to browser restrictions on loading local files.

### 🔧 To run locally:
1. Open the folder in **Visual Studio Code**.
2. Install the **Live Server extension**.
3. Right-click `index.html` → **“Open with Live Server”**.
4. The visualization will open at `http://127.0.0.1:5500`.

> ⚠️ Do not open `index.html` directly in the browser — the chart will not load due to blocked file access.

## 📄 Research Questions

This project investigates:

1. How Premier League team performances evolved over the past decade.
2. How transfer spending correlates with success across all clubs.
3. Whether in-game dominance metrics (possession, shots) predict outcomes.

## 🔗 Report Reference

> Vaishnav Desai, 7CCSMSDV Coursework (2025).  
> King's College London.  
> [Student ID: K24033932]  
> *See `report.pdf` for full methodology and analysis.*

## 📚 Acknowledgements

- Data from [Transfermarkt](https://transfermarkt.com) and [Premier League](https://premierleague.com)
- Visualization inspired by perceptual principles from Ware (2004) and Munzner (2014)
