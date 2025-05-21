<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateAccountRequest extends FormRequest
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
            'first_name' => 'string|min:2|max:25',
            'last_name'  => 'string|min:2|max:25',
            'username'   => 'string|min:5|max:25|unique:users,username,' . auth()->id(),
            'email'      => 'email|min:7||max:255|unique:users,email,' . auth()->id(),
            'country'    => 'string|min:4|max:100',
            'birth_date' => 'date|before:today',
            "bio"        => "string"
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 400)
        );
    }
}
