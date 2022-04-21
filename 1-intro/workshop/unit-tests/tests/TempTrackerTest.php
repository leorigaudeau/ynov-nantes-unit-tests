<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_insert_type_error(){
        $tracker = new TempTracker;
        $this->expectException(\TypeError::class);
        $tracker->insert("notAInteger");

    }

    public function test_insert_value_error(){
        $tracker = new TempTracker;
        $this->expectException(\ValueError::class);
        $this->expectException(\ValueError::class);

        $tracker->insert(200);

        $tracker->insert(-1);
    }
    public function test_temp_inserted_in_array(){
        $tracker = new TempTracker;
        $this->assertEquals(count($tracker->get_temps()), 0);
        $tracker->insert(20);
        $this->assertEquals(count($tracker->get_temps()), 1);
    }

    public function test_maximum_fct(){
        $tracker = new TempTracker;
        $this->assertEquals($tracker->get_max(), -1);
        $tracker->insert(20);
        $this->assertEquals($tracker->get_max(), 20);
        $tracker->insert(9);
        $this->assertEquals($tracker->get_max(), 20);

    }
    public function test_minimum_fct(){
        $tracker = new TempTracker;
        $this->assertEquals($tracker->get_min(), -1);
        $tracker->insert(14);
        $this->assertEquals($tracker->get_min(), 14);
        $tracker->insert(12);
        $this->assertEquals($tracker->get_min(), 12);
    }
    public function test_mean_fct(){
        $tracker = new TempTracker;
        $tracker->insert(20);
        $this->assertEquals($tracker->get_mean(), 20);
        $tracker->insert(0);
        $this->assertEquals($tracker->get_mean(), 10);
    }

}