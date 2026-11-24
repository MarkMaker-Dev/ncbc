const EVENTS_API_URL =
  "https://script.google.com/macros/s/AKfycbz5Vv8otLA5fA5ahikArVmKqX2MrfR1V60w9FUWY8m1w9eJIWTIKjpr9pIaUOk1zVMcBQ/exec";

export async function getUpcomingEvents() {
  const response = await fetch(EVENTS_API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch events.");
  }

  return await response.json();
}
