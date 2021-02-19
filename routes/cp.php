<?php

use Illuminate\Support\Facades\Route;

Route::get('gitamic/status', 'GitamicApiController@status')->name('gitamic.status');

Route::group(['prefix' => 'gitamic/api'], function () {
    Route::get('status', 'GitamicApiController@status');
    Route::post('commit', 'GitamicApiController@commit');
    Route::post('push', 'GitamicApiController@push');
    Route::get('actions/{type}', 'GitamicApiController@actions');
    Route::post('actions/{type}', 'GitamicApiController@doAction');
});
