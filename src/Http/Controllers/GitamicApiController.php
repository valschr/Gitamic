<?php

namespace SimonHamp\Gitamic\Http\Controllers;

use Illuminate\Support\Str;
use SimonHamp\Gitamic\Contracts\SiteRepository;

class GitamicApiController
{
    public function status(SiteRepository $git)
    {
        $unstaged = $git->getUnstagedFiles();
        $staged = $git->getStagedFiles();
        $data = [
            'unstaged' => $unstaged->all(),
            'staged' => $staged->all(),
            'meta' => [
                'unstaged_count' => $unstaged->count(),
                'staged_count' => $staged->count(),
            ],
            'up_to_date' => $git->upToDate(),
            'ahead' => $git->ahead(),
            'behind' => $git->behind(),
            'diverged' => $git->diverged(),
            'status' => $git->status(),
        ];

        if (request()->wantsJson()) {
            return response()->json($data);
        }

        $data['loaded'] = true;

        return view('gitamic::status', ['wrapper_class' => 'max-w-full', 'data' => json_encode($data)]);
    }

    public function actions($type)
    {
        $method = Str::camel("get_{$type}_actions");
        return response()->json($this->{$method}());
    }

    public function doAction(SiteRepository $git, $type)
    {
        $action = request()->input('action');
        $selections = request()->input('selections');

        $files_obj = $git->getFilesOfType($type);
        $files = [];
        foreach ($files_obj as $f) {
            if (isset($f['id']) &&
                isset($f['path']) &&
                in_array($f['id'], $selections)) {
                array_push($files, $f['path']);
            }
        }

        return response()->json(['action' => $git->{$action}($files)]);
    }

    public function commit(SiteRepository $git)
    {
        $result = $git->commit(request()->input('commit_message'));

        return response()->json(['result' => $result]);
    }

    public function push(SiteRepository $git)
    {
        $result = $git->push();

        return response()->json(['result' => $result]);
    }

    public function pull(SiteRepository $git)
    {
        $result = $git->pull();

        return response()->json(['result' => $result]);
    }

    protected function getUnstagedActions()
    {
        return [
            [
                'title' => 'Stage',
                'handle' => 'stage',
                'fields' => ['path'],
            ],
            [
                'title' => 'Discard',
                'handle' => 'discard',
                'confirmationText' => 'Are you sure want to discard changes to the selected files?',
                'warningText' => 'You cannot undo this!',
                'buttonText' => 'Yes, discard',
                'dangerous' => true,
                'confirm' => true,
                'fields' => ['path'],
            ],
        ];
    }

    protected function getStagedActions()
    {
        return [
            [
                'title' => 'Unstage',
                'handle' => 'unstage',
                'buttonText' => 'Unstage',
                'fields' => ['path'],
            ],
        ];
    }

    public function getDiff(SiteRepository $git)
    {
        $filename = request()->input('filename');
        $diff = $git->getDiff($filename);
        return response()->json(['result' => $diff]);
    }
}
