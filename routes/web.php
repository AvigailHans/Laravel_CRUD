<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::delete('api/students/{id}',[StudentsController::class,'delete']);
Route::resource('/api/students', 'StudentsController');
Route::delete('/api/students/{id}/delete', 'StudentsController@delete');
Route::get('/', 'HomeController')->name('home');


Route::group([
    'prefix' => 'public',
], function ($router) {
Route::get('/students/{id}',[App\Http\Controllers\StudentsController::class,'show']);
Route::put('/students/{id}',[App\Http\Controllers\StudentsController::class,'edit']);
Route::delete('/students/{id}',[App\Http\Controllers\StudentsController::class,'delete']);
Route::post('/students',[App\Http\Controllers\StudentsController::class,'store']);
Route::resource('/students', 'StudentsController');
//Route::delete('/students/{id}', 'StudentsController@destroy');
});