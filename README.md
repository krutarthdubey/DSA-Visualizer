# 🧮 DSA Visualizer

An interactive *web-based Data Structures & Algorithms visualizer* built with *Flask, JavaScript, and CSS*.  
This tool helps visualize how sorting algorithms work step by step with animated transitions and adjustable speed control.

---

## 🚀 Features
✅ Visualize Bubble Sort step-by-step  
✅ Smooth animations with highlighted swaps  
✅ Adjustable animation speed (real-time slider)  
✅ Clean, responsive UI with modern design  
✅ Flask-powered backend serving JSON sorting data  

---

## 🛠 Tech Stack
- *Backend:* Flask (Python)
- *Frontend:* HTML, CSS, JavaScript
- *Communication:* REST API (JSON)
- *Algorithms:* Bubble Sort (extendable to others like Insertion, Selection, etc.)

---

## 🏗 Project Structure

DSA-Visualizer/
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── requirements.txt


---

## 🧩 Requirements
Create a virtual environment and install the dependencies:
bash
pip install -r requirements.txt


### requirements.txt

Flask==3.0.0


---

## 💡 How It Works
1. The user enters an array of numbers (e.g., 8, 3, 5, 1, 7).
2. Flask simulates Bubble Sort and stores each intermediate step.
3. The frontend fetches these steps and animates them as bars.
4. Colors indicate the sorting process:
   - 🟥 Red: elements being swapped  
   - 🟩 Green: normal state  
   - 🟦 Blue: final sorted state  

---

## ⚙ Run the Application
bash
python app.py

Then visit:

http://127.0.0.1:5000


---

## 🎨 UI Preview (Add your screenshots later)
| Input Array | Sorting Animation | Adjustable Speed |
|--------------|------------------|------------------|
| (screenshot.png) | (screenshot.png) | (screenshot.png) |

---

## 📚 Future Enhancements
- Add Insertion Sort, Selection Sort, and Quick Sort  
- Add time/space complexity display  
- Include step counter and pause/play controls  
- Support visualization of search algorithms  

---

## 👨‍💻 Author
*Krutarth Dubey*  
📍 Bhopal, India  
📧 [krutarthdubey2001@gmail.com](mailto:krutarthdubey2001@gmail.com)  
🔗 [GitHub](https://github.com/krutarthdubey) | [LinkedIn](https://linkedin.com/in/krutarth-dubey) | [LeetCode](https://leetcode.com/u/cracky123/)
