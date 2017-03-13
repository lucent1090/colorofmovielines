export const intro = {
	'cht': "一部電影可以透過各式各樣的方法訴說故事，從燈光、配樂、服裝美術到台詞與顏色，例如在電影 Carol 中，導演 Todd Haynes 利用在灰濛濛的紐約中的一抹豔紅，來表達一段不被允許的愛情故事中，對戀人的欲望，所以我們決定藉由這個小計畫，了解更多導演企圖利用顏色展現，各角色間的關係。",
	'en': "A good movie tells stories in any forms. Through the sounds, the clothes, the lines and of course the colors. In the movie Carol, Todd Haynes use an intrepid red in the gray New York to reveal the desire in love, a forbidden love between two women. We decide to make a small project to understand more about how they arrange the color related to the main actor/actress."
};

export const content = [
	{
		'cht': "電影呈現角色間關係的語言相當豐富，從畫面中兩人的距離、障礙物、畫面的顏色到說話的內容，都能察覺角色的關係，我們決定從畫面的顏色主題與台詞的關聯切入，透過取出畫面的顏色與相對應的台詞，連結角色與他所屬的顏色圖。",
		'en': "In order to associate the actor/actress and their color, we extract the color theme from the scene whenever the name are mentioned in the conversations. There are total 1422 lines in the movie Carol. We go through all these lines and pick out the frame with specific name mentioned."
	},
	{
		'cht': "Carol 中一共出現1422行台詞，我們找出台詞中所有包含人名的畫面，對每一個畫面的取出對應的主題顏色，集合所有的主題顏色當作該角色的顏色圖。利用 MCCQ (median-cut color quantization) 演算法，我們可以對每一個畫面取出約一組約 50 個顏色，當作主題顏色，但 Carol 中採用大量黑色作為緩衝空間，所以我們並不將黑色列入主題顏色中。",
		'en': "By MCCQ (median-cut color quantization) algorithm, we can extract a set of colors as the color theme of each frame. With this set of colors, we now can associate the character with a specific set of colors.To improve the result of MCCQ and consider that this is an extraction from a film scene, we did not put the black color as part of color theme."
	},
	{
		'cht': "現在你可以試著點點看不同的人名，並利用調整透明度，來比較不同人名所對應的顏色圖。",
		'en': "You can now try to click on different name above and see the beautiful colors associate with them. Also don't forget to adjust the opacity to compare different color sets between characters."
	},
	{
		'cht': "MCCQ 是基於 RGB 顏色空間的演算法，因此不容易在 2D 空間中呈現，為了有更好的效果，我們決定採用顏色環的概念，將顏色由 RGB 轉換至 HSV 以便呈現。",
		'en': "MCCQ algorithm works based on the RGB color space, which means it's on a 3-dimension world. To show the color in 2-dimension world, we decide to use the concept of color ring by converting the RGB color to HSV (Hue, Saturation, Value) color space. "
	},
	{
		'cht': "針對每一個顏色圖中的顏色，根據 HSV 的定義，我們利用色相作為角度，飽和度決定半徑大小，在顏色環中上色，HSV 顏色空間中，明亮度是第三個維度，在這裡我們沒有劃上第三個維度，而是將原本的顏色直接呈現，以表達明亮度",
		'en': "For each RGB color vector, we will have a correspondent HSV color vector. Then we use the hue as the degree and the saturation as the radius in our color ring. (This part is exactly same as the definition of HSV color space) The value, which also called the brightness in color space, will not be shown in the color ring coordinate but directly shown in the color of each dot. "
	}
];