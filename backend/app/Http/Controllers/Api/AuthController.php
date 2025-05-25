<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function user (Request $request)
    {
        return response()->json($request->user());
    }

    public function register (RegisterRequest $request)
    {
        $data = $request->all();
        $data["password"] = Hash::make($request->password);
        $user = User::create($data);

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json(["message" => "Account registered successfully"], 201);
    }

    public function login (LoginRequest $request)
    {
        if (!Auth::attempt($request->only("email", "password")))
        {
            return response()->json(["message" => "Invalid Credentials"], 401);
        }

        $request->session()->regenerate();

        return response()->json(["message" => "You are logged in"], 200);
    }

    public function logout (Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
