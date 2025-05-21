<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AccountController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
Route::post("/logout", [AuthController::class, "logout"])->middleware("auth:sanctum");
Route::get("/auth-user", [AuthController::class, "getData"])->middleware("auth:sanctum");

Route::middleware("auth:sanctum")->group(function () {
    Route::prefix("account")->group(function () {
        Route::put("/update", [AccountController::class, "update"]);
        Route::delete("/delete", [AccountController::class, "delete"]);
        Route::put("/change-password", [AccountController::class, "change_password"]);
    });
});