var player_1={
	current : 0,
	total : 0
}

var player_2={
	current : 0,
	total : 0
}

var activePlayer;
activePlayer=player_1;

function changePlayer()
{
	document.querySelector('.player-' +getPlayer() +'-panel').classList.remove('active');
	if(activePlayer===player_1)
		{
			activePlayer=player_2;
		}
	else
	{
		activePlayer=player_1;
	}
	document.querySelector('.player-' +getPlayer() +'-panel').classList.add('active');
}

function getPlayer()
{
	if(activePlayer===player_1)
		{
			return '1';
		}
	else
	{
		return '2';
	}
}
function dice_roll()
{
	var dice=Math.floor(Math.random()*6)+1;
	var diceDom=document.querySelector('.dice');
	if(dice===1)
	{
		activePlayer.current=0;
		document.querySelector('#current-' +getPlayer()).textContent=activePlayer.current;
		diceDom.style.display='block';
		diceDom.src='dice-' +dice + '.png';
		changePlayer();
	}           
	else
	{
		activePlayer.current+=dice;
		document.querySelector('#current-' +getPlayer()).textContent=activePlayer.current;
		diceDom.style.display='block';
		diceDom.src='dice-' +dice + '.png';        
	}
}

function checkWin()
{
	if(activePlayer.total>=100)
	{
		return true;
	}
	return false;
}


function holdAction()
{
	activePlayer.total+=activePlayer.current;
	activePlayer.current=0;
	document.querySelector('#current-' +getPlayer()).textContent=activePlayer.current;
	document.querySelector('#score-' +getPlayer()).textContent=activePlayer.total;
	if(checkWin())
	{
		document.getElementById('name-' +getPlayer()).textContent='Winner!';
		document.querySelector('.player-' +getPlayer() +'-panel').classList.add('Winner!');
		document.querySelector('.dice').style.display='none';
		document.querySelector('.btn-roll').style.display='none';
		document.querySelector('.btn-hold').style.display='none';
	}
	else
	{
		changePlayer();
	}
}

function game_init()
{
	player_1.current=0;
	player_1.total=0;
	player_2.current=0;
	player_2.total=0;
	if(activePlayer===player_2)
	{
		document.querySelector('.player-2-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.add('active');

	}  
	activePlayer=player_1;
	document.getElementById('name-1').textContent='Player 1';
	document.getElementById('name-2').textContent='Player 2';
	document.getElementById('score-1').textContent='0';
	document.getElementById('score-2').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-2').textContent='0';
	document.querySelector('.btn-roll').style.display='block';
	document.querySelector('.btn-hold').style.display='block';                                                                               
}

function game()
{
	document.querySelector('.dice').style.display='none';
	document.querySelector('.btn-roll').addEventListener('click',dice_roll);
	document.querySelector('.btn-hold').addEventListener('click',holdAction);
	document.querySelector('.btn-new').addEventListener('click',game_init);
}


game();




