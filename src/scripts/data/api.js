import { BASE_URL } from '../config';
import { getAccessToken } from '../utils/auth';

const ENDPOINT = {
  // OpenStreetMap
  OPEN_STREET_MAP: (lat, lng) => `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
  OPEN_STREET_MAP_ADDRESS_TO_LATLNG: (address) => `https://nominatim.openstreetmap.org/search?format=json&q=${address}`,

  // Auth
  REGISTER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,

  // Story
  GET_ALL_STORY: `${BASE_URL}/stories`,
  ADD_STORY: `${BASE_URL}/stories`,
  GET_DETAIL_STORY: `${BASE_URL}/stories/`,

  // Report commend
  SUBSCRIBE: `${BASE_URL}/notifications/subscribe`,
  UNSUBSCRIBE: `${BASE_URL}/notifications/subscribe`,


}

export async function getLatLng(address) {
  const fetchResponse = await fetch(ENDPOINT.OPEN_STREET_MAP_ADDRESS_TO_LATLNG(address));
  const json = await fetchResponse.json();
  const { lat, lon } = json[0];
  return {
    lat: lat,
    lng: lon
  }
}
export async function getAddress({ lat, lng }) {
  const fetchResponse = await fetch(ENDPOINT.OPEN_STREET_MAP(lat, lng));
  const json = await fetchResponse.json();

  if (json.display_name) {
    return {
      address: json.display_name,
      ok: fetchResponse.ok,
    }
  } else {
    return {
      address: "Address is not found",
      ok: fetchResponse.ok,
    }
  }

}

export async function getRegistered({ name, email, password }) {
  const data = JSON.stringify({ name, email, password });

  const fetchResponse = await fetch(ENDPOINT.REGISTER, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: data,
  });

  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  }
}

export async function getLogin({ email, password }) {
  const data = JSON.stringify({ email, password });
  const fetchResponse = await fetch(ENDPOINT.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getData() {
  const accessToken = getAccessToken();
  const fetchResponse = await fetch(ENDPOINT.GET_ALL_STORY, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getSingle(id) {
  const accessToken = getAccessToken();

  const response = await fetch(`${ENDPOINT.GET_DETAIL_STORY}${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const json = await response.json();

  return {
    ...json,
    ok: response.ok
  }
}

export async function postStory(data) {
  const accessToken = getAccessToken();
  const fetchResponse = await fetch(ENDPOINT.ADD_STORY, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: data,
  });

  const json = await fetchResponse.json();
  return {
    ...json,
    ok: fetchResponse.ok
  }
}

export async function subscribePushNotification({ endpoint, keys: { p256dh, auth } }) {
  const accessToken = getAccessToken();
  const data = JSON.stringify({
    endpoint,
    keys: { p256dh, auth },
  });

  const fetchResponse = await fetch(ENDPOINT.SUBSCRIBE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function unsubscribePushNotification({ endpoint }) {
  const accessToken = getAccessToken();
  const data = JSON.stringify({ endpoint });

  const fetchResponse = await fetch(ENDPOINT.UNSUBSCRIBE, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}