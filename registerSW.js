if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa_pgsw.ts', { scope: '/pwa_pg' })})}