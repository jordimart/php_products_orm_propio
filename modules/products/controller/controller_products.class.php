<?php

include ($_SERVER['DOCUMENT_ROOT'] . "/modules/products/utils/functions_products.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/utils/upload.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/utils/common.inc.php");
session_start();

if ((isset($_POST['alta_products_json']))) {

    alta_products();
}

function alta_products() {
    $jsondata = array();
    $productsJSON = json_decode($_POST["alta_products_json"], true);

    $result = validate_products($productsJSON);
    //echo json_encode($result);
    //exit;
//si no hay avatar pone la ruta de default
    if (empty($_SESSION['result_avatar'])) {
        $_SESSION['result_avatar'] = array('result' => true, 'error' => "", 'data' => '/media/default-avatar.png');
    }
    //coge la url de la foto
    $result_avatar = $_SESSION['result_avatar'];


    if (($result['result']) && ($result_avatar['result'])) {
        $arrArgument = array(
            'serial_number' => ucfirst($result['data']['serial_number']),
            'category' => ($result['data']['category']),
            'trademark' => ($result['data']['trademark']),
            'model' => ($result['data']['model']),
            'date_entry' => ($result['data']['date_entry']),
            'date_exit' => ($result['data']['date_exit']),
            'purchase_price' => ($result['data']['purchase_price']),
            'sale_price' => ($result['data']['sale_price']),
            'provider' => ucfirst($result['data']['provider']),
            'weight' => ($result['data']['weight']),
            'height' => ($result['data']['height']),
            'width' => ($result['data']['width']),
            'description' => ucfirst($result['data']['description']),
            'status' => ($result['data']['status']),
            'warranty' => ($result['data']['warranty']),
            'avatar' => $result_avatar['data']
        );

        //aquí insertaremos en base de datos
        //Para ello utilizo la funcion loadModel de la utilidad common.inc
        $arrValue = false;
        $path_model = $_SERVER['DOCUMENT_ROOT'] . '/modules/products/model/model/';
        //llamamos al modelo produts y a crear
        $arrValue = loadModel($path_model, "product_model", "create_product", $arrArgument);
        //echo json_encode($arrValue);
        //exit();
        if ($arrValue){
                    $mensaje = "Su registro se ha efectuado correctamente, para finalizar compruebe que ha recibido un correo de validacion y siga sus instrucciones";
                }else{
                    $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";
                 }
        //$mensaje = "Product has been successfully registered";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['product'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;
        $callback = "index.php?module=products&view=results_products";

        $jsondata["success"] = true;
        $jsondata["redirect"] = $callback;

        echo json_encode($jsondata);
        exit;
    } else {

        $jsondata["success"] = false;
        $jsondata["error"] = $result['error'];
        $jsondata["error_avatar"] = $result_avatar['error'];

        $jsondata["success1"] = false;
        if ($result_avatar['resultado']) {
            $jsondata["success1"] = true;
            $jsondata["img_avatar"] = $result_avatar['datos'];
        }
        header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
        exit;
    }
}

if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {

    $result_avatar = upload_files();
    $_SESSION['result_avatar'] = $result_avatar;
}


if (isset($_GET["delete"]) && $_GET["delete"] == true) {
    $_SESSION['result_avatar'] = array();
    $result = remove_files();
    if ($result === true) {
        echo json_encode(array("res" => true));
    } else {
        echo json_encode(array("res" => false));
    }
}

if (isset($_GET["load"]) && $_GET["load"] == true) {

    $jsondata = array();
    if (isset($_SESSION['product'])) {
        $jsondata["success"] = true;
        $jsondata["product"] = $_SESSION['product'];
    }
    if (isset($_SESSION['msje'])) {
        $jsondata["msje"] = $_SESSION['msje'];
    }
    close_session();
    echo json_encode($jsondata);
    exit;
}

function close_session() {
    unset($_SESSION['product']);
    unset($_SESSION['msje']);
    $_SESSION = array(); // Destruye todas las variables de la sesión
    session_destroy(); // Destruye la sesión
}

if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {

    $jsondata = array();

    if (isset($_SESSION['product'])) {
        $jsondata["product"] = $_SESSION['product'];
        echo json_encode($jsondata);
        exit;
    } else {
        $jsondata["product"] = "";
        echo json_encode($jsondata);
        exit;
    }
}
