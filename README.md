Project title: The Alice Garden<br>
Project client: Alice, floral designer, volunteer, instructor<br>
Project description: a minimal and pure photo galllery that is mobile-friendly and allows simple additions of photos, descriptions, and titles. 

<table>
<tr><th>Function name</th><th>Function description</th></tr>
<tr><td>setDetails(imageUrl, titleText)</td><td>Sets the main image to be shown after user clicks on a specific image. The function will accept the URL to the clicked image as well as the corresponding description</td></tr>
<tr><td>imageFromThumb(thumbnail)</td><td>Returns the URL of the clicked image</td></tr>
<tr><td>titleFromThumb(thumbnail)</td><td>Returns the title of the clicked image</td></tr>
<tr><td>setDetailsFromThumb(thumbnail)</td><td>Used to call setDetails(); with the returned results of imageFromThumb(); and titleFromThumb();</td></tr>
<tr><td>addThumbClickHandler(thumb)</td><td>Listens for a click event on an image, and then activates setDetailsFromThumb();</td></tr>
<tr><td>getThumbnailsArray(mode)</td><td>Uses document function querySelectorAll(); to select all elements that contain the 'data-image-role' attribute, which are then converted to an array.</td></tr>
<tr><td>initializeEvents()</td><td>Starts when the script is fully loaded onto the DOM.</td></tr>
<tr><td>randomizeFlower()</td><td>Optional; changes the data-image-url of a random flower thumbnail so that the detail image no longer matches the thumbnail. </td></tr>
<tr><td>resetFlowerList(mode)</td><td>Resets flower thumbnails to their original data-image-url values and changes another one at random.</td></tr>
</table>
