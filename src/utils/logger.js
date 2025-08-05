// src/utils/logger.js
export const logEvent = (eventName, data) => {
  const log = {
    event: eventName,
    data,
    timestamp: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem('logs') || '[]');
  existing.push(log);
  localStorage.setItem('logs', JSON.stringify(existing));
};
