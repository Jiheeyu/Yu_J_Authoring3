<?php
    // include the file we just wrote - connect
    include("connect.php"); // like a JS import statement

    $query = "SELECT * FROM profData";

    $runQuery =$pdo->query($query);

    $result = array();

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    //return $result;
    //var_dump(json_encode($result));
    echo(json_encode($result));