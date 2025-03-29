import { convertBase64ToUint8Array } from './index';
import { VAPID_PUBLIC_KEY } from '../config';
import { subscribePushNotification, unsubscribePushNotification } from '../data/api';
import { generateSubscribeButtonTemplate, generateUnsubscribeButtonTemplate } from '../templates';

export function generateSubscribeOptions() {
    return {
        userVisibleOnly: true,
        applicationServerKey: convertBase64ToUint8Array(VAPID_PUBLIC_KEY),
    };
}

export async function requestPermission() {
    if (!('Notification' in window)) {
        console.error('Notification API unsupported.');
        return false;
    }

    const status = await Notification.requestPermission();

    if (status === 'denied') {
        alert('Izin notifikasi ditolak.');
        return false;
    }

    if (status === 'default') {
        alert('Izin notifikasi ditutup atau diabaikan.');
        return false;
    }

}

export async function getPushSubscription() {
    const registration = await navigator.serviceWorker.getRegistration();
    return await registration.pushManager.getSubscription();
}

export async function subscribe() {
    await requestPermission();
    let pushSubscription;

    try {
        const registration = await navigator.serviceWorker.getRegistration();
        pushSubscription = await registration.pushManager.subscribe(generateSubscribeOptions());

        const { endpoint, keys } = pushSubscription.toJSON();
        const response = await subscribePushNotification({ endpoint, keys });

        if (!response.ok) {
            console.log('subscribe: response:', response);
            alert(response.message);
            return;
        }

        alert(response.message);
        document.getElementById('subscribe-button-container').innerHTML = generateUnsubscribeButtonTemplate();
    } catch (error) {
        console.error(error);
    }
}

export async function unsubscribe() {
    let subscription;
    try {
        subscription = await getPushSubscription();
        const { endpoint } = subscription.toJSON();

        const unsubscribe = await subscription.unsubscribe();

        const response = await unsubscribePushNotification({ endpoint });

        if (!response.ok) {
            console.log('subscribe: response:', response);
            alert(response.message);
            return;
        }

        alert(response.message);
        document.getElementById('subscribe-button-container').innerHTML = generateSubscribeButtonTemplate();
    } catch (error) {
        console.error(error);
    }
}

export async function isSubscribed() {
    const registration = await navigator.serviceWorker.getRegistration();
    return !!(await registration.pushManager.getSubscription());
}

export async function toggleSubscribe() {
    const subscribed = await isSubscribed();

    if (!subscribed) {
        await subscribe();
    } else {
        await unsubscribe();
    }
}