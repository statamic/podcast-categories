<?php

namespace Statamic\PodcastCategories;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
        Fieldtypes\PodcastCategories::class,
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/addon.js',
    ];
}
