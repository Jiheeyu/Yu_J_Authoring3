<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'IDP_ProfData',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = 'root';

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        //var_dump($pdo);
        //ehco (in this case) is almost like console.log()
        //echo "youre in !";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }