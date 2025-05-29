<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Api\ArticlesController;

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
Route::get("/user", [AuthController::class, "user"])->middleware("auth:sanctum");

Route::middleware("auth:sanctum")->group(function () {
    Route::prefix("account")->group(function () {
        Route::put("/update", [AccountController::class, "update"]);
        Route::delete("/delete", [AccountController::class, "delete"]);
        Route::put("/change-password", [AccountController::class, "change_password"]);
    });

    Route::prefix("articles")->group(function () {
        Route::get("/", [ArticlesController::class, "index"]);
        Route::post("/", [ArticlesController::class, "store"]);
        Route::get("/{id}", [ArticlesController::class, "show"]);
        Route::put("/{id}", [ArticlesController::class, "update"]);
        Route::delete("/{id}", [ArticlesController::class, "destroy"]);
    });

    Route::prefix("/like/article/{id}")->group(function () {
        Route::post("/", [LikeController::class, "store"]);
        Route::delete("/", [LikeController::class, "destroy"]);
    });
});
