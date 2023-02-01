const GOOGLE_API_KEY = "jdahquig7tfh87twfgi"; // example api

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&key=${GOOGLE_API_KEY}`; // example url
  return imagePreviewUrl;
}
