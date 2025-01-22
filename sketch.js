function setup()
{
	//create your canvas here
	createCanvas(800, 700);
}

function draw()
{

	background(229, 215, 202); //sandy brown

	//inner big circle 1
	strokeWeight(0.3);
	fill(229, 204, 108);
	ellipse(310, 379, 155, 155);

	//background quad 1
	strokeWeight(0);
	fill(204, 180, 135, 220);
	quad(660, 10, 715, 10, 105, 690, 50, 510);

	//inner big circle 7
	strokeWeight(1);
	fill(223, 176, 180);
	ellipse(308, 209, 136, 136);

	//inner big circle 8
	strokeWeight(0);
	fill(98, 60, 70, 230);
	ellipse(505, 190, 80, 80);

	//inner big circle 19
	strokeWeight(1.5);
	fill(58, 103, 115);
	ellipse(563, 325, 58, 58);

	//background quad 2
	strokeWeight(0);
	fill(102, 141, 146, 175);
	quad(280, 10, 175, 10, 710, 660, 710, 405);

	//outer circle boundary
	strokeWeight(28);
	fill(229, 215, 202, 0);
	ellipse(385, 335, 570, 570);

	//inner small circle 4
	strokeWeight(0.3);
	fill(139, 158, 144, 200);
	ellipse(308, 278, 76, 76);

	//inner big circle 6
	strokeWeight(0.2);
	fill(169, 35, 40, 200);
	ellipse(393, 240, 110, 110);

	//inner big circle 2
	strokeWeight(0.9);
	fill(229, 204, 108, 230);
	ellipse(474, 421, 105, 105);

	//inner big circle 3
	strokeWeight(0.2);
	fill(139, 158, 144, 175);
	ellipse(497, 318, 155, 155);

	//inner big circle 5
	strokeWeight(0.2);
	fill(73, 76, 61, 190);
	ellipse(368, 362, 195, 195);

	//inner big circle 9
	strokeWeight(2.4);
	fill(164, 39, 41);
	ellipse(360, 96, 14, 14);

	//inner big circle 10
	strokeWeight(7);
	fill(164, 39, 41);
	ellipse(191, 316, 35, 35);

	//inner big circle 11
	strokeWeight(3);
	fill(60, 76, 115);
	ellipse(157, 391, 17, 17);

	//inner big circle 12
	strokeWeight(2);
	fill(189, 130, 127);
	ellipse(417, 547, 35, 35);

	//inner big circle 13
	strokeWeight(0.7);
	fill(184, 108, 82);
	ellipse(199, 486, 38, 38);

	//inner big circle 14
	strokeWeight(3);
	fill(122, 161, 130, 250);
	ellipse(238, 398, 50, 50);

	//inner big circle 15
	strokeWeight(2);
	fill(164, 36, 41, 250);
	ellipse(294, 442, 60, 60);

	//inner big circle 16
	strokeWeight(0.5);
	fill(99, 36, 41, 220);
	ellipse(389, 404, 19, 19);

	//inner big circle 16
	strokeWeight(2);
	fill(189, 130, 127, 250);
	ellipse(569, 484, 26, 26);

	//inner big circle 17
	strokeWeight(0.2);
	fill(223, 184, 109);
	ellipse(448, 498, 16, 16);

	//inner big circle 18
	strokeWeight(1);
	fill(192, 61, 52);
	ellipse(371, 471, 13, 13);
	
	//inner big circle 20
	strokeWeight(1);
	fill(0, 0, 0, 250);
	ellipse(504, 455, 29, 29);

	//inner big circle 21
	strokeWeight(1);
	fill(0, 0, 0, 250);
	ellipse(506, 277, 29, 29);

	//inner big circle 22
	strokeWeight(1);
	fill(0, 0, 0, 250);
	ellipse(456, 222, 42, 42);

	//inner big circle 23
	strokeWeight(1);
	fill(0, 0, 0, 250);
	ellipse(327, 486, 9, 9);

	//inner big circle 24
	strokeWeight(4);
	fill(255, 45, 0, 50);
	ellipse(359, 316, 72, 72);

	//inner big circle 25
	strokeWeight(1);
	fill(0, 0, 0, 250);
	ellipse(359, 316, 18, 18);

	//line 1
	strokeWeight(2);
	line(203, 178, 604, 245);
	line(136, 342, 611, 436);

	//line 2
	strokeWeight(1.6);
	line(520, 122, 269, 539);
	line(536, 247, 561, 246);
	line(536, 256, 572, 255);
	line(401, 142, 423, 175);
	line(391, 152, 417, 185);
	line(420, 147, 202, 433);

	//line 3
	strokeWeight(1.2);
	line(179, 370, 508, 541);
	line(243, 483, 336, 535);
	line(213, 515, 344, 491);

	//line 4
	strokeWeight(1);
	line(251, 139, 604, 395);
	line(178, 369, 508, 540);
	line(528, 143, 462, 554);
	line(146, 277, 590, 395);

	//line 5
	strokeWeight(3);
	line(540, 222, 544, 491);

	//line 6
	strokeWeight(0.8);
	line(448, 238, 241, 539);
	line(360, 193, 170, 368);
	line(172, 402, 578, 449);

	//line 7
	strokeWeight(0.3);
	line(443, 237, 226, 536);
	line(516, 147, 453, 539);
	line(540, 134, 472, 572);
	line(144, 287, 585, 411);
	line(173, 263, 145, 311);
	line(184, 267, 152, 307);
	line(224, 285, 212, 327);
	line(436, 525, 499, 487);
	line(442, 535, 504, 498);
	line(446, 543, 507, 507);

}