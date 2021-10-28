<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use App\Student;
use DB;




class StudentsController extends Controller
{
    public function index(Request $request)
    {
        $input = $request->all();
        $students=New Student();
        if(isset($input['query'])&&$input['query']!=''&&$input['query']!='null')
        {
            $students= $students->where(function($query) use ($input){
                                    $query->orWhere('id_num', 'like', '%'.$input['query'].'%')
                                          ->orWhere('phone', 'like', '%'.$input['query'].'%')
                                          ->orWhere('address', 'like', '%'.$input['query'].'%')
                                          ->orWhere(DB::raw("concat(l_name, ' ', f_name)"), 'like', '%'.$input['query'].'%')
                                          ->orWhere(DB::raw("concat(f_name, ' ', l_name)"), 'like', '%'.$input['query'].'%');
                                });

        }
        return  $students->get();
    }
        public function show($id)
    {
        return Student::find($id);
    }

    
    public function store(Request $request)
    {
       $input = $request->all();
      $student =New  Student($input);
      $student->save();
       return ['status' => 'success'];
        
    }
    public function edit($id ,Request $request)
    {
      $input = $request->all();
      $student = Student::find($id)->fill( $input)->save();
      return ['status' => 'success'];

    }
    
    public function delete($id){
        Student::find($id)->delete();
       //Student::where('id', $id)->delete();
        return ['status' => 'success', 'students' => Student::all()];
    }
}
