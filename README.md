# Fontend Test

## Technologies Used
ReactJS
TailwindCss
Axios

## Description
Test was made in light mode 

If users enter an invalid country an alert will pop up 

On page load, Singapore's weather will be loaded first 

Search history component overflows as to not make users have to scroll all the way up to view re rendered weather

Delete button removes specific record in history 

UseContext was used to manage state containing current country and weather and history records

API Key is stored in .env file and not uploaded to github

## Things I Could implement if I had more time and how
- Theme Color

  Depending on if I would want to create a toggle or depending on time and day, I would use UseContext to store my theme pass
  it down to my compoenents and render the appropriate images and colors based on theme.

- Rearangement of history

  Depending on how I would want to display search history, I would change how I stored my history searches. currently implemented
  is appending to end of array, If I would want to have it added to the start of the array I would use unshift.
