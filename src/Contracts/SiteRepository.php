<?php

namespace SimonHamp\Gitamic\Contracts;

use Illuminate\Support\Collection;

interface SiteRepository
{
    public function getFilesOfType($type): Collection;

    public function getUnstagedFiles(): Collection;

    public function getUntrackedFiles(): Collection;

    public function getStagedFiles(): Collection;

    public function getPendingFiles(): Collection;

    public function stage($files, $args = []): string;

    public function unstage($files, $args = []): string;

    public function remove($files, $args = []): string;

    public function commit($message): string;

    public function push(): string;

    public function upToDate(): bool;

    public function ahead(): bool;

    public function behind(): bool;

    public function status(): string;
}
