<?php

namespace App\Http\Controllers\Api;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticlesController extends Controller
{
    public function index ()
    {
        return response()->json([
            "message" => "Articles List",
            "articles" => Article::orderBy("id", "desc")->get()
        ], 200);
    }

    public function store (Request $request)
    {
        $article = Article::create([
            "user_id" => $request->user()->id,
            "title"   => $request->title,
            "content" => $request->content,
            "poster"  => $request->poster,
        ]);

        return response()->json([
            "message" => "Article Added",
            "article" => $article
        ], 201);
    }

    public function show ($id)
    {
        $article = Article::find($id);

        if (!$article) return response()->json(["message" => "Article Not Found"], 404);

        return response()->json([
            "message" => "Article Found",
            "article" => $article,
        ], 200);
    }

    public function update ($id, Request $request)
    {
        $article = Article::find($id);

        if (!$article) return response()->json(["message" => "Article Not Found"], 404);

        $article->update($request->except(["poster", "user_id"]));

        return response()->json([
            "message" => "Article Updated",
            "article" => $article,
        ], 200);
    }

    public function destroy ($id)
    {
        $article = Article::find($id);

        if (!$article) return response()->json(["message" => "Article Not Found"], 404);

        $article->delete();

        return response()->json(["message" => "Article Deleted"], 200);
    }
}