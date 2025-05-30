<?php

namespace App\Http\Requests\Articles;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "title"   => "required|string|",
            "content" => "required|string|",
            "poster"  => "nullable|image|mimes:jpeg,png,jpg",
        ];
    }

    protected function failedValidation (Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                "message" => "Validation failed",
                "errors"  => $validator->errors(),
            ], 400)
        );
    }
}
