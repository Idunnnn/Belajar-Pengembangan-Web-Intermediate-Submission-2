export function showFormattedDate(date, locale = 'en-US', options = {}) {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

export function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function stopAllStreams() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => track.stop());
    window.stream = null;
  }
}

export async function srcToImage(imageElement) {
  const imageUrl = imageElement.src;
  const response = await fetch(imageUrl);
  return await response.blob();
}


export function formDataToJson(formData) {
  const obj = {};
  formData.forEach((value, key) => {
    if (value instanceof File) {
      obj[key] = value.name;
    } else {
      obj[key] = value;
    }
  });
  return JSON.stringify(obj);
}

export async function requestNotificationPermission() {
  if ('Notification' in window) {
    const result = await Notification.requestPermission();

    if (result === 'denied') {
      console.log('Izin notification ditolak.');
      return;
    }

    if (result === 'default') {
      console.log('Izin notification ditutup atau diabaikan.');
      return;
    }

    console.log('Izin notification diterima');

  } else {
    console.log('Browser does not support notification')
  }
}

export function convertBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function isServiceWorkerAvailable() {
  return 'serviceWorker' in navigator;
}

export async function registerServiceWorker() {
  if (!isServiceWorkerAvailable) {
    console.log('Service worker API unsupported');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service worker telah terpasang', registration);
  } catch (error) {
    console.log('Failed to install service worker:', error);
  }
}

