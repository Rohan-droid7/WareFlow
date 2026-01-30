import { useState, useEffect, useRef } from 'react';
import { WS_URL } from '../config';

export default function useWarehouseSocket(url = WS_URL, speedMultiplier = 1) {
  const [frameData, setFrameData] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const bufferRef = useRef([]);

  useEffect(() => {
    let isMounted = true;

    const connect = () => {
      if (!isMounted) return;
      
      setConnectionStatus('connecting');
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        if (isMounted) setConnectionStatus('connected');
      };

      ws.onmessage = (event) => {
        if (!isMounted) return;
        try {
          const data = JSON.parse(event.data);
          // Cap buffer at 50 frames to prevent memory leak
          if (bufferRef.current.length > 50) {
            bufferRef.current.splice(0, bufferRef.current.length - 50);
          }
          bufferRef.current.push(data);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        if (isMounted) {
          setConnectionStatus('disconnected');
          reconnectTimeoutRef.current = setTimeout(connect, 2000);
        }
      };

      ws.onerror = () => {
        if (isMounted) {
          setConnectionStatus('error');
        }
      };
    };

    connect();

    return () => {
      isMounted = false;
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current && wsRef.current.readyState !== WebSocket.CLOSED) {
        wsRef.current.close();
      }
    };
  }, [url]);

  useEffect(() => {
    const interval = 500 / speedMultiplier;
    const timer = setInterval(() => {
      if (bufferRef.current.length > 0) {
        setFrameData(bufferRef.current.shift());
      }
    }, interval);
    return () => clearInterval(timer);
  }, [speedMultiplier]);

  return { frameData, connectionStatus };
}
