<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test_equality()
    {
        $this->assertEquals("Léo", "Léo");
    }
    
    public function test_flatten_2Level(){
        $this->assertEquals(flatten([["Léo","Henry"], ["Paul","Toma"]]), ["Léo","Henry","Paul","Toma"]);
    }
    public function test_flatten_3Level(){
        $this->assertEquals(flatten([[10,[12,"R"]], ["Bureau","Annonce"]]), [10,12,"R","Bureau","Annonce"]);
    }
}