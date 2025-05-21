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
    public function getData (Request $request)
    {
        return $request->user();
    }

    public function register (RegisterRequest $request)
    {
        $data = $request->all();
        $data["password"] = Hash::make($request->password);

        $user = User::create($data);
        $token = $user->createToken("api-token")->plainTextToken;

        return response()->json([
            "message" => "Account registered successfully",
            "user"    => $user,
            "token"   => $token,
        ], 201);
    }

    public function login (LoginRequest $request)
    {
        if (!Auth::attempt($request->only("email", "password")))
        {
            return response()->json(["message" => "Invalid Credentials"], 400);
        }

        $user = Auth::user();
        $token = $user->createToken("api-token")->plainTextToken;

        return response()->json([
            "message" => "You are logged in",
            "user"    => $user,
            "token"   => $token
        ], 200);
    }

    public function logout (Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
