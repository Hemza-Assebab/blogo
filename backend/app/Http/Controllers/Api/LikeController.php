<?php

namespace App\Http\Controllers\Api;

use App\Models\Like;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LikeController extends Controller
{
    public function store ($id, Request $request)
    {
        $article = Article::find($id);

        if (!$article) return response()->json(["message" => "Article not found"], 404);

        Like::create([
            "user_id"    => $request->user()->id,
            "article_id" => $article->id,
        ]);

        return response()->json(["message" => "Article liked"], 201);
    }

    public function destroy ($id, Request $request)
    {
        $article = Article::find($id);

        if (!$article) return response()->json(["message" => "Article not found"], 404);

        $like = Like::where("user_id", $request->user()->id)
            ->where("article_id", $article->id)
            ->first();

        if (!$like) return response()->json(["message" => "Article wasn't even liked"], 404);

        $like->delete();

        return response()->json(["message" => "Article like deleted"], 200);
    }
}
