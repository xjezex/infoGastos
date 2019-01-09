<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root', '', 'infogastos');

//CONFIGURACION DE CABEZERAS
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

//PRINT TEST
$app->get('/test', function () use($app, $db) {
    echo "Hello";
});


//ADD EXPENSE
$app->post('/addExpense', function() use($app, $db){
	$json = $app->request->post('json');
	$data = json_decode($json, true);

	if(!isset($data['dateExpense'])){
		$data['dateExpense']=null;
	}

	if(!isset($data['amount'])){
		$data['amount']=null;
	}
	if(!isset($data['descriptionAmount'])){
		$data['descriptionAmount']=null;
	}

	$query = "INSERT INTO expense VALUES (NULL, ".
			"'{$data['dateExpense']}',".
			"'{$data['amount']}',".
			"'{$data['descriptionAmount']}',".
			");";

	$insert = $db->query($query);

	$result = array(
			"status" => 'error',
			"code"   => 404,
			'message'=> 'No se cargo Gasto' 
		); 

	if($insert){
		$result = array(
			"status" => 'success',
			"code"   => 200,
			'message'=> 'Se cargo Gasto correctamente' 
		);
	}

	echo json_encode($result);
});

$app->run();

?>