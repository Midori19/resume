<?php

    header("Content-Type:text/html; charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    mb_internal_encoding("UTF-8");

    $web_content = @file_get_contents("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314");
    
    echo $web_content;
?>
