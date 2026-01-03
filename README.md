# LogiSync

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![React 19](https://img.shields.io/badge/react-19-blue.svg)](https://react.dev/)

**LogiSync** is an AI-powered logistics and supply chain management platform designed to transform reactive supply networks into proactive, autonomous ecosystems. By integrating advanced machine learning with a real-time digital twin command center, LogiSync optimizes warehouse operations, intelligently routes shipments, and dynamically responds to global transit disruptions.

---

## 🌟 Core Features

- **Admin Command Center**: A centralized, high-performance web interface providing total oversight of orders, global fleet status, and supply chain health.
- **Autonomous Fulfillment**: A Reinforcement Learning (RL) agent autonomously navigates warehouse grids to fulfill orders with zero human intervention.
- **3D Digital Twin**: Live Three.js visualization of the warehouse floor directly within the admin dashboard.
- **Predictive Risk Engine**: Continuously ingests live weather and traffic conditions to compute disruption risk scores for all transit routes.
- **Dynamic Rerouting**: Instantly recalculates and updates delivery paths upon detecting elevated risk profiles.
- **AI-Powered Diagnostics**: Generates natural language reasoning and alerts for operators to explain transit risks and required interventions.

---

## 🧠 Algorithmic Foundation

LogiSync leverages a suite of robust algorithms to drive its autonomous operations:

- **XGBoost**: Intelligently selects the optimal fulfillment warehouse by weighting real-time inventory, distance, and current facility load.
- **Dijkstra’s Algorithm**: Powers the core routing engine to find the absolute shortest global path across our complex multi-city highway network.
- **Reinforcement Learning (PPO)**: Enables the robotic agent's micro-navigation, pathfinding, and dynamic obstacle avoidance within the warehouse.
- **LightGBM**: Highly accurate gradient boosting model trained to predict transit risks caused by meteorological and traffic anomalies.

---

## 🛠️ Architecture & Tech Stack

### Frontend Ecosystem
- **Framework**: React 19 + Vite
- **Visualization**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, Lucide React

### Backend Ecosystem
- **API & Streaming**: Dual-server FastAPI architecture for high-concurrency async operations and WebSocket streaming.
- **Machine Learning**: PyTorch, Stable-Baselines3, Scikit-learn, LightGBM, XGBoost.
- **State Synchronization**: Firebase Realtime Database.
- **External Integrations**: Google Maps API, Gemini AI.

---

## 🚀 Quick Start (Docker)

The easiest way to boot the entire LogiSync ecosystem is via Docker Compose.

### 1. Configure Environment Variables
Copy the example environment file and insert your API keys:
``bash
cp backend/.env.example backend/.env
# Edit backend/.env with your GOOGLE_MAPS_API_KEY and GEMINI_API_KEY
``

### 2. Launch the Platform
``bash
docker-compose up --build
``

### 3. Access the Services
- **Admin Command Center**: [http://localhost:3000](http://localhost:3000)
- **RL API Server**: [http://localhost:8000](http://localhost:8000)
- **Supply Chain API**: [http://localhost:8001](http://localhost:8001)

---

## 💻 Manual Setup (Development)

If you prefer to run the services natively for development:

**Backend Requirements:**
``bash
cd backend
pip install -r requirements.txt
python run_backend.py
``

**Frontend Requirements:**
``bash
cd frontend
npm install
npm run dev
``
*(Runs on http://localhost:5173 by default)*

---

## 🛡️ License
This project is licensed under the MIT License. See the LICENSE file for more details.
