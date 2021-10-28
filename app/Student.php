<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use DB;

class Student extends Model  
{

	protected $fillable = ['f_name', 'l_name', 'id_num', 'id_num_type', 'address', 'phone', 'gender', 'grade' ];

}