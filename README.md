# AnimeCharList

This is a basic react native application.
the api i am referring to for the data is 
https://animechan.vercel.app/api/quotes/anime?title=naruto

The sample response is 
{ "anime":"Boruto: Naruto Next Generations",
  "character":"Naruto Uzumaki",
  "quote":"The many lives lost during long years of conflict... because of those selfless sacrifices, we are able to bathe in peace and prosperity now. To ingrain this history within the new generation will be a vital cog in helping to maintain the peace."
 }
 
 #Implemented Features
 
```
○ A list of items
○ Detail view of each item
○ A view that shows the history of items whose detailed view is checked
○ Should be able to navigate between the different views
○ Complete static typing of each component and object using TypeScript
○ List pagination
```


 On cliking of the character on the home page 
 details page opens up which containts the anime , character and the quote.
 the history contains the cards for which details have been viewed.
 Pagination is implemented.
 
 TODO: 
 Realtime Searching is left to be implemeted.
 
 How to run
 ```
 Download the project
 Run npm i 
 npx react-native run-android 
 ```
