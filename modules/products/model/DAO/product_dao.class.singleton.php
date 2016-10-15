<?php
class productDAO {

    static $_instance;

//constructor vacio
    private function __construct() {

    }
//funcion para instanciar clases
    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_product_DAO($db, $arrArgument) {
      /*  $name = $arrArgument['name'];
        $last_name = $arrArgument['last_name'];
        $birth_date = $arrArgument['birth_date'];
        $title_date = $arrArgument['title_date'];
        $address = $arrArgument['address'];
        $user = $arrArgument['user'];
        $pass = $arrArgument['pass'];
        $email = $arrArgument['email'];
        $en_lvl = $arrArgument['en_lvl'];
        $interests = $arrArgument['interests'];
        $avatar = $arrArgument['avatar'];

        $history = 0;
        $music = 0;
        $computing = 0;
        $magic = 0;

        foreach ($interests as $indice) {
            if ($indice === 'History')
                $history = 1;
            if ($indice === 'Music')
                $music = 1;
            if ($indice === 'Computing')
                $computing = 1;
            if ($indice === 'Magic')
                $magic = 1;
        }

        $sql = "INSERT INTO products (name, last_name, birth_date, title_date,"
                . " address, user, pass, email, en_lvl,Computing,History,Magic,Music, avatar"
                . " ) VALUES ('$name', '$last_name', '$birth_date',"
                . " '$title_date', '$address', '$user', '$pass', '$email', '$en_lvl', '$computing', '$history', '$magic', '$music', '$avatar')";

        return $db->ejecutar($sql);*/
        return ("Estoy dentro del Dao");
    }

}
