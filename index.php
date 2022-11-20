<?php
// Deze lijn moet aangezet worden wanneer de site in productie gaat. Op deze manier staan de error berichten van PHP uit.
// error_reporting(0);

// start de sessie
session_start();
// voeg toe wat geïnclude moet worden
include_once("includes/head.html");

// TODO: inplaats van $_GET -> $_SESSION.
if (isset($_GET["page"])) {
    // Als er een pagina in de adress balk staat dan gebruiken we die.
    $page = $_GET["page"];
} else {
    // In alle andere gevallen (Dus als er geen pagina in de addres balk staat) gaan we naar onderstaande pagina.
    $page = "home";
}
if ($page) {
    // Als er een pagina is (Wat dus altijd true is) dan zoeken we die pagina in de "pages" map en gaan we daar naartoe.
    include("pages/" . $page . ".php");
}
