export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "6e52c51877msh5ebff6341f13bc9p136d7bjsnd510211f9a5a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?"
  );

  const result = await response.json();

  return result;
}
