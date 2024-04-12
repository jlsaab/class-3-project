# Map of Homes I Had

This map is for class 3 in Advanced GIS: Interactive Web Mapping and Spatial Data Visualization.

I've dreamed of this map all my life! I always wanted to map each point and see a flyover effect to feel the scale anew and reminisce on the beautiful locations.

Making this map was fun. Ideally I would take it even further by either adding a timeline slider or a scroll-to-zoom feature that goes to each place in sequence. I would also like to make it responsive and easy to view on a smartphone. If I was really taking it to the next level, I’d like to add places my family comes from (Lebanon, Spain, Venezuela) and places I’ve visited with my family to have a complete visual of our footprint across the globe.

I ran into trouble when adding in some controls from different examples online. For the geocoder search bar, I added the CSS and Javascript I needed, but didn’t realize I needed to add some HTML lines that called in an additional Javascript library from Mapbox. For the background toggle menu, the buttons were not working for a while. I realized that my Javascript lines needed to be sequenced with `;` and I had not added that to the previous command. I also tried to make the cursor turn into a pointer when above the menu options but I wasn’t able to crack that. Upon creating the markers, I was struggling to make them appear and finally once I set `color: ‘color’` it worked. I’m not quite sure why that is but I was able to make my markers black. It was helpful to use GitHub to push and pull my changes in chunks so that I could take stock of what had changed.
