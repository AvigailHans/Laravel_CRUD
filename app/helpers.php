<?php

function v_select_prepare($arr)
{
    $new_arr = [];
    $i = 0;
    foreach ($arr as $key => $value) {
        $new_arr[$i]['value'] = $value;
        $new_arr[$i]['label'] = $key;
        $i++;
    }
    return $new_arr;
}

function field(&$value, $alt_value = '')
{
    return isset($value) && $value != '' ? $value : $alt_value;
}
function field_no_ref($value, $alt_value = '')
{
    return isset($value) && $value != '' ? $value : $alt_value;
}
function object($object, $value, $alt_value = 0)
{
    return !is_null($object) ? $object->$value : $alt_value;
}

function bytes_to_human($bytes)
{
    $units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

    for ($i = 0; $bytes > 1024; $i++) {
        $bytes /= 1024;
    }

    return round($bytes, 2) . ' ' . $units[$i];
}

function clean_phone($phone)
{
    return $phone = preg_replace('/\D+/', '', $phone);
}

function datepicker($date)
{
    if (str_contains($date, '/')) {
        $date = \DateTime::createFromFormat('d/m/Y', $date);
    } else {
        $date = \DateTime::createFromFormat('Y-m-d', $date);
    }
    return $date;
}

function hebrew_date($date)
{
    $converted_date = jdtojewish(gregoriantojd(date('m', strtotime($date)), date('d', strtotime($date)), date('Y', strtotime($date))), true, CAL_JEWISH_ADD_GERESHAYIM);
    $converted_date = iconv('WINDOWS-1255', 'UTF-8', $converted_date);
    return $converted_date;
}
//!return date in format 01012010
function masav_date()
{
    return date('dmy', time());
}
//!fill numbers (0) in left
function left_pad($number, $n)
{
    return str_pad($number, $n, "0", STR_PAD_LEFT);
}

//!fill numbers (0) in right
function right_pad($number, $n)
{
    return str_pad($number, $n, "0", STR_PAD_RIGHT);
}
//!fill characters left side of a string
function left_pad_string($chr, $number, $text)
{
    if (strlen($text) > $number) {
        $text = substr($text, 0, $number);
    } else {
        return sprintf("%{$chr}{$number}s", $text);
    };
}

function utf2heb($val)
{
    return iconv("UTF-8", "WINDOWS-1255", html_entity_decode($val, ENT_COMPAT, 'utf-8'));
}

function mb_str_pad($input, $pad_length, $pad_string = ' ', $pad_type = STR_PAD_RIGHT)
{
    $diff = strlen($input) - mb_strlen($input, 'UTF-8');
    return str_pad($input, $pad_length + $diff, $pad_string, $pad_type);
}

//!if the string is long than $maxLength, trim else fill with spaces
function truncateText($textToTruncate, $maxLength = 2)
{
    $string_length = mb_strlen($textToTruncate, 'UTF-8');
    if ($string_length == $maxLength) {
        return $textToTruncate;
    } else if ($string_length > $maxLength) {
        return mb_substr($textToTruncate, 0, $maxLength, 'UTF-8');
    } else if ($string_length < $maxLength) {
        return mb_str_pad($textToTruncate, $maxLength, ' ', STR_PAD_LEFT);
    }
}

function division($num_a, $num_b, $decimal = 1)
{
    if ($num_a == 0 || $num_b == 0) return 0;
    return ($num_b === 0) ? 0 : number_format($num_a / $num_b, $decimal);
}
function datediffInWeeks($date1, $date2)
{
    if ($date1 < $date2) return datediffInWeeks($date2, $date1);
    $diff = $date1 - $date2;
    return floor($diff / 604800);
}
function utf8_strrev($str)
{
    return join('', array_reverse(
        preg_split('~~u', $str, -1, PREG_SPLIT_NO_EMPTY)
    ));
    // preg_match_all('/./us', $str, $ar);
    // return join('', array_reverse($ar[0]));
}
function percent($total, $val, $precision = 2)
{
    if ($total > 0 && $val && $val > 0) {
        return number_format(($val / $total) * 100, $precision);
    } else {
        return 0;
    }
}

function string_if($variable, $string)
{
    if ($variable) {
        return $string;
    } else {
        return '';
    }
}

function months_to_dates($input, $time = false)
{
    if (isset($input['months']) && $input['months'][0] != '' && $input['months'][1] != '') {
        $input['months'][0] = date_format(date_create_from_format('d/m/Y', '01/' . $input['months'][0]), 'Y-m-01') . string_if($time, ' 00:00:00');
        $input['months'][1] = date_format(date_create_from_format('d/m/Y', '01/' . $input['months'][1]), 'Y-m-t') . string_if($time, ' 23:59:59');

        $input['dates'][0] = $input['months'][0];
        $input['dates'][1] = $input['months'][1];
    } else if (isset($input['dates'])) {
        $input['dates'][0] = date('Y-m-d', strtotime($input['dates'][0])) . string_if($time, ' 00:00:00');
        $input['dates'][1] = date('Y-m-d', strtotime($input['dates'][1])) . string_if($time, ' 23:59:59');
    }
    return $input;
}

function get_score($evaluation, $field)
{
    if (isset($evaluation->answers)) {
        $answers = json_decode($evaluation->answers);
        $score = array_first($answers, function ($value, $key) use ($evaluation, $field) {
            if ($value) {
                return $value->score == $evaluation[$field];
            }
        });
        if (isset($score->label)) {
            return $score->label;
        } else {
            return '';
        }
    } else {
        return '';
    }
}
function search_array($term, $array)
{
    foreach ($array as $key => $value) {
        if (stristr($value, $term) === FALSE) {
            continue;
        } else {
            return $key;
        }
    }
    return FALSE;
}
function parse_number($number, $dec_point = null)
{
    if (empty($dec_point)) {
        $locale = localeconv();
        $dec_point = $locale['decimal_point'];
    }
    return floatval(str_replace($dec_point, '.', preg_replace('/[^\d' . preg_quote($dec_point) . ']/', '', $number)));
}
function criteriaMet($value1, $operator, $value2)
{
    switch ($operator) {
        case '<':
            return $value1 < $value2;
            break;
        case '<=':
            return $value1 <= $value2;
            break;
        case '>':
            return $value1 > $value2;
            break;
        case '>=':
            return $value1 >= $value2;
            break;
        case '==':
            return $value1 == $value2;
            break;
        case '!=':
            return $value1 != $value2;
            break;
        default:
            return false;
    }
    return false;
}

function make_slug($string)
{
    return preg_replace('/\s+/u', '-', trim($string));
}
function tamal_numbers($number)
{
    $negative = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    $number = str_replace(".", "", number_format($number, 2, '', ''));
    if ($number < 0) {
        $number = abs($number);
        $last = $negative[substr($number, -1)];
        $number = substr($number, 0, -1) . $last;
    }
    return str_pad($number, 7, "0", STR_PAD_LEFT);
}

function labelConstructor($name, $model, $var, $element_name = 'name', $id = 'id')
{
    $label = $name . ': ';
    if (is_array($model)) {
        $array = $model;
        foreach ($array as $key => $element) {
            $label .= $element;
            if ($key != count($array) - 1) {
                $label .= ', ';
            } else {
                $label .= '. ' . "\n\r";
            }
        }
    } else {
        $model_name = '\\App\\' . $model;
        $model = new $model_name;
        $object = $model->whereIn($id, $var)->get();
        foreach ($object as $key => $element) {
            foreach (explode('->', $element_name) as $property) {
                $element = get_nested_property($property, $element);
            }

            $label .= $element;
            if ($key != count($object) - 1) {
                $label .= ', ';
            } else {
                $label .= '. ' . "\n\r";
            }
        }
    }
    return $label;
}

function get_nested_property($property, $object)
{
    return $object->{$property};
}
function split_name($name)
{
    $parts = array();

    while (strlen(trim($name)) > 0) {
        $name = trim($name);
        $string = preg_replace('#.*\s([\w-]*)$#', '$1', $name);
        $parts[] = $string;
        $name = trim(preg_replace('#' . $string . '#', '', $name));
    }

    if (empty($parts)) {
        return false;
    }

    $parts = array_reverse($parts);
    $name = array();
    $name['first_name'] = $parts[0];
    $name['middle_name'] = (isset($parts[2])) ? $parts[1] : '';
    $name['last_name'] = (isset($parts[2])) ? $parts[2] : (isset($parts[1]) ? $parts[1] : '');

    return $name;
}


function full_name_split($name)
{
    $results = array();

    $r = explode(' ', $name);
    $size = count($r);

    //check first for period, assume salutation if so
    if (mb_strpos($r[0], '.') === false || filter_var($r[0], FILTER_VALIDATE_EMAIL)) {
        $results['salutation'] = '';
        $results['first'] = $r[0];
    } else {
        $results['salutation'] = $r[0];
        $results['first'] = $r[1];
    }

    //check last for period, assume suffix if so
    if (mb_strpos($r[$size - 1], '.') === false) {
        $results['suffix'] = '';
    } else {
        $results['suffix'] = $r[$size - 1];
    }

    //combine remains into last
    $start = ($results['salutation']) ? 2 : 1;
    $end = ($results['suffix']) ? $size - 2 : $size - 1;

    $last = '';
    for ($i = $start; $i <= $end; $i++) {
        $last .= ' ' . $r[$i];
    }
    $results['last'] = trim($last);

    if ($results['first'] == '' && $results['salutation'] != '') {
        $results['first'] = $results['salutation'];
    }

    return $results;
}

function camelize($input, $separator = '_')
{
    return str_replace($separator, '', ucwords($input, $separator));
}
