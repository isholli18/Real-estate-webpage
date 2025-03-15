<?php
require_once 'includes/data.php';

function getFeaturedProperties() {
    global $properties;
    return array_filter($properties, function($property) {
        return $property['featured'] == 1;
    });
}

function getProperty($id) {
    global $properties;
    foreach ($properties as $property) {
        if ($property['id'] == $id) {
            return $property;
        }
    }
    return null;
}

function searchProperties($search) {
    global $properties;
    $search = strtolower($search);
    return array_filter($properties, function($property) use ($search) {
        return strpos(strtolower($property['title']), $search) !== false ||
               strpos(strtolower($property['location']), $search) !== false;
    });
}