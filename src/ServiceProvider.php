<?php

namespace SimonHamp\Gitamic;

use Gitonomy\Git\Repository as GitRepository;
use SimonHamp\Gitamic\Contracts\SiteRepository;
use Statamic\Facades\CP\Nav;
use Statamic\Facades\User;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../resources/dist/js/cp.js',
    ];

    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php',
    ];

    public function register()
    {
        app()->singleton(SiteRepository::class, function () {
            return new Repository(app(GitRepository::class));
        });

        app()->singleton(GitRepository::class, function () {

            $user = User::current();

            $name = $user->name() ?? config('gitamic.user.name');
            $email = $user->email() ?? config('gitamic.user.email');

            return new GitRepository(base_path(), [
                'environment_variables' => [
                    'GIT_AUTHOR_NAME' => $name,
                    'GIT_AUTHOR_EMAIL' => $email,
                    'GIT_COMMITTER_NAME' => $name,
                    'GIT_COMMITTER_EMAIL' => $email,
                ],
            ]);
        });
    }

    public function boot()
    {
        parent::boot();

        Nav::extend(function ($nav) {
            $user = User::current();
            if ($user->isSuper() || $user->hasRole('approver')) {
                $nav->tools('Gitamic')
                    ->route('gitamic.status')
                    ->icon('git');
            }
        });
    }
}
