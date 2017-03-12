export const intro = {
	'cht': "",
	'en': "A good movie tells stories in any forms. Through the sounds, the clothes, the lines and of course the colors. In the movie Carol, Todd Haynes use a intrepid red in the gray New York to reveal the desire in love, a forbidden love between two women. We decide to make a small project to understand more about how they arrange the color related to the main actor/actress."
};

export const content = [
	{
		'cht': "",
		'en': "In order to associate the actor/actress and their color, we extract the color theme from the scene whenever the name are mentioned in the conversations. There are total 1422 lines in the movie Carol. We go through all these lines and pick out the frame with specific name mentioned."
	},
	{
		'cht': "",
		'en': "By MCCQ (median-cut color quantization) algorithm, we can extract a set of colors as the color theme of each frame. With this set of colors, we now can associate the character with a specific set of colors.To improve the result of MCCQ and consider that this is an extraction from a film scene, we did not put the black color as part of color theme."
	},
	{
		'cht': "",
		'en': "You can now try to click on different name above and see the beautiful colors associate with them."
	},
	{
		'cht': "",
		'en': "MCCQ algorithm works based on the RGB color space, which means it's on a 3-dimension world. To show the color in 2-dimension world, we decide to use the concept of color ring by converting the RGB color to HSV (Hue, Saturation, Value) color space. "
	},
	{
		'cht': "",
		'en': "For each RGB color vector, we will have a correspondent HSV color vector. Then we use the hue as the degree and the saturation as the radius in our color ring. (This part is exactly same as the definition of HSV color space) The value, which also called the brightness in color space, will not be shown in the color ring coordinate but directly shown in the color of each dot. "
	}
];