<?php

// $list_items is a multi-dimensional array, each index of which is an associative array with keys that will allow us
// to build up a HTML hyperlink

$list_items = [
    [ 'link_text' => 'Google', 'link_href' => 'www.google.com'],
    [ 'link_text' => 'Amazon', 'link_href' => 'www.amazon.com'],
    [ 'link_text' => 'Microsoft', 'link_href' => 'www.microsoft.com'],
];

// $template is a format string with two placeholders for strings denoted by %s

$template = '<li><a href="%s">%s</a></li>';

// $output_string is what we'll use to build up our HTML. Note: we could actually omit this declaration and initialization,
// but I've kept it to make things a bit easier to read.

$output_string = '';

// We use a foreach loop to iterate over $list_items. Within the foreach we have a reference to the current item via $item

foreach ($list_items as $item) {
    // sprintf is used to return the generated string which is then concatenated to $output_string
    $output_string .= sprintf($template, $item['link_href'], $item['link_text']);
}

// Here we use printf to output the generated list items within a <ul>

printf('<ul>%s</ul>', $output_string);