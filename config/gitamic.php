<?php

return [

    'use_authenticated' => true,

    'user' => [
        'name' => env('GITAMIC_GIT_USER_NAME', env('STATAMIC_GIT_USER_NAME', 'Gitamic')),
        'email' => env('GITAMIC_GIT_USER_EMAIL', env('STATAMIC_GIT_USER_EMAIL', 'gitamic@example.com')),
    ],

];
