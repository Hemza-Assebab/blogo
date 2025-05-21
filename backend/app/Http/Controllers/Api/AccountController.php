<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UpdateAccountRequest;

class AccountController extends Controller
{
    public function update (UpdateAccountRequest $request)
    {
        $user = $request->user();
        $user->update($request->except(["password", "avatar", "role"]));

        return response()->json([
            "message" => "Account Infos Updated",
            "user" => $user,
        ], 200);
    }

    public function delete (Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $user->delete();

        return response()->json(["message" => "Account Deleted"], 200);
    }

    public function change_password (Request $request)
    {
        $validator = Validator::make($request->all(), [
            "current_password" => "required|string",
            "new_password"     => "required|string|min:8|max:20"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed",
                "errors"  => $validator->errors(),
            ], 400);
        }

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(["message" => "Current password is incorrect"], 403);
        }

        $user->update(["password" => Hash::make($request->new_password)]);
        return response()->json(["message" => "Password updated"], 200);
    }
}
