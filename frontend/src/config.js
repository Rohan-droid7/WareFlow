// API Configuration — reads from Vite environment variables with localhost fallbacks
export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8001';
export const P2_API = import.meta.env.VITE_P2_API || 'http://localhost:8000';
export const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000/ws';
