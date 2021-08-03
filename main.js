// iniciando o canvas na pagina
var c=
document.getElementById('myCanvas');
var ctx =
c.getContext('2d');


// colocando o gradiente no canvas
var grd = ctx.createLinearGradient(0, 0, 200,200);
 // escolhendo as cores pro gradiente, sendo a primeira verde mar e a segunda amarela, a posição das cores no gradiente estão na linha superior  
 grd.addColorStop(0, "seagreen");
 grd.addColorStop(1, "yellow");
 
 // preenche com o estilo do gradiente
 ctx.fillStyle = grd;
 //desenha o gradiente
 ctx.fillRect(1000, 100, 0, 800);


 
//cria o ponto inicial do desenho
ctx.beginPath();
//define o arco da circunferência desenhada
ctx.arc(95, 55, 40, 0, 20 * 2* Math.PI);
//desenha a forma vazia e da cor a ela
ctx.strokeStyle = "yellow"
ctx.stroke();


//posição inicial (x,y) da linha, as linhas a seguir definem o caminho de x,y da linha até formar o retangulo
ctx.moveTo(10, 10);
ctx.lineTo(10, 100);
ctx.lineTo(280, 100);
ctx.lineTo(280, 10);
ctx.lineTo(10, 10)

//estilo de preenchimento do traço
ctx.strokeStyle = "black";
//desenha o traço
ctx.stroke();

//Define a fonte e o tamanho da fonte
ctx.font = "30px Arial";
//posição do texto e alargura do texto


ctx.fillText("Nature Care", 30, 60,1000);
//tamanho da fonte e fonte
ctx.font = "15px Arial";
// texto para aparecer na tela
ctx.strokeText("  Somos uma instituição independente de preservação natural, trabalhamos com reflorestametos de areas afetadas", 10, 150,1000);
ctx.strokeText("pela queima ilegal e pelo desmatamento clandestino. Apoiamos a preservação da natureza para  ", 10, 170,1000);
ctx.strokeText("presevarmos nosso futuro no planeta, nos ajuda a tornar o planeta no lugar belo que sempre foi. ", 10, 190,1000);
var img = new Image();
    //pegando uma imagem da pasta para colocar no site
    img.src = 'arvore.png';
// desenha a imagem e sua posição
    img.onload = function(){
    ctx.drawImage(img,800,10,400,400);};
    

	// define a posição inicial
	ctx.beginPath();
	//posição do ponto inicial
	ctx.moveTo(30, 30);
	//posição das curvas e do ponto final
	ctx.bezierCurveTo(120,140, 180,10, 100,100);
	// desnha a curva e define sua cor
	ctx.strokeStyle = "yellow"
	ctx.stroke();



	
// definindo o a constante do circulo
	const circle = new Path2D();


//posição e tamanho do circulo
	circle.arc(400, 400, 150, 0, 2 * Math.PI);



// desenha o circulo e define a cor dele
	ctx.fillStyle="transparent";
	ctx.fill(circle);



	// adiciona event listener para o mouse
	
	myCanvas.addEventListener('mousemove', function(event) {
	// verifica se o cursos do mouse está no circulo
	
	if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
		//define a imagem 
		var img2 = new Image();
		img2.src = 'mata2.png';
		
	
	
		img2.onload = function(){
			//posição  e tamanho da imagem
		ctx.drawImage(img2,200,250,500,300);};
		
	}
	else {
		var img = new Image();
		img.src = 'mata1.png';
		//define a outra imagem 
	
	
		img.onload = function(){
		ctx.drawImage(img,200,250,500,300);};
	
	}	
	
	ctx.fill(circle);
	})
	